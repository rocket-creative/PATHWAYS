# Client Intake Form Setup

## Email Configuration

The client intake form uses Resend to send email notifications when forms are submitted.

### Setup Steps

1. **Install Resend package** (if not already installed):
   ```bash
   npm install resend
   ```

2. **Create `.env.local` file** in the project root (if it doesn't exist):
   ```bash
   cp env.example.txt .env.local
   ```

3. **Add your Resend API key** to `.env.local`:
   ```env
   RESEND_API_KEY=re_WYoHc99V_PJ82CLqF7ZPqNhhKZJcRcdad
   RESEND_FROM_EMAIL=onboarding@resend.dev
   ```

4. **Configure the from email**:
   - For testing: Use `onboarding@resend.dev` (works immediately)
   - For production: Verify your domain in Resend dashboard and use `noreply@yourdomain.com` or similar

5. **Email Recipients**:
   The form automatically sends to:
   - jenni@pathwayswithin.com
   - georgestoff@rocketcreative.net
   
   To change recipients, add to `.env.local`:
   ```env
   CLIENT_INTAKE_EMAIL_RECIPIENTS=jenni@pathwayswithin.com,georgestoff@rocketcreative.net
   ```

### Resend Domain Verification (Production)

For production use, you should verify your domain in Resend:

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Add your domain (e.g., `pathwayswithin.com`)
3. Add the DNS records provided by Resend
4. Wait for verification (usually a few minutes)
5. Update `RESEND_FROM_EMAIL` in `.env.local` to use your verified domain

### Testing

After setup, test the form:
1. Fill out the client intake form
2. Submit it
3. Check both recipient email inboxes for the formatted email

### Troubleshooting

- **Emails not sending**: Check server logs for Resend errors
- **"From email not verified"**: Use `onboarding@resend.dev` for testing or verify your domain
- **API key errors**: Verify the key is correct in `.env.local` and restart the dev server
