import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URL
);

// Generate an OAuth URL for user authorization
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://www.googleapis.com/auth/gmail.readonly', 'https://www.googleapis.com/auth/gmail.send'],
});

// Exchange code for tokens
const { tokens } = await oauth2Client.getToken(code);
oauth2Client.setCredentials(tokens);
const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

const res = await gmail.users.messages.list({
  userId: 'me',
  q: 'is:unread'
});

const messages = res.data.messages || [];
for (const message of messages) {
  const msg = await gmail.users.messages.get({
    userId: 'me',
    id: message.id,
  });
  console.log(msg.data.snippet);
}
import { Queue, Worker } from 'bullmq';

const emailQueue = new Queue('emailQueue');

emailQueue.add('checkEmails', {});

const worker = new Worker('emailQueue', async job => {
  if (job.name === 'checkEmails') {
    // Fetch and process emails
  }
});
