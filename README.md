# Portfolio Next.js

Personal portfolio built with Next.js App Router and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact form

The contact form supports two delivery modes:

1. Recommended for Vercel: Resend
2. Optional local fallback: Gmail with Nodemailer

Copy `.env.example` to `.env.local` and configure the variables you want to use.

### Recommended production setup with Resend

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

Notes:

- `CONTACT_TO_EMAIL` is where recruiter messages will arrive.
- `CONTACT_FROM_EMAIL` can stay as `onboarding@resend.dev` while testing.
- For a real production sender address, verify your own domain in Resend and then replace `CONTACT_FROM_EMAIL`.

### Optional Gmail fallback

If you want the form to work locally without Resend, you can still use:

```bash
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_generated_app_password
```

The API route will use Resend first if `RESEND_API_KEY` exists. Otherwise it falls back to Gmail/Nodemailer.

## Deploy on Vercel

1. Import the repository into Vercel or link the local repo to the existing project.
2. Add the production environment variables from `.env.example`.
3. Trigger a new deployment.
4. Test the contact form on the deployed URL.

## Tech

- Next.js
- React
- Tailwind CSS
- Framer Motion
- Resend
- Nodemailer fallback
