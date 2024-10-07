This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Sending Emails with Nodemailer

This project uses [Nodemailer](https://nodemailer.com/about/) to handle email functionality. Follow these steps to set up the email service:

### Step 1: Create a Gmail App Password
- Log into your Google Account and go to your security settings.
- Under the "Signing in to Google" section, enable "2-Step Verification."
- After enabling 2-Step Verification, go to "App Passwords."
- Select "Other (Custom name)" and name it something like `Portfolio Email Service`.
- Generate the password and keep it somewhere safe. This will be your `EMAIL_PASS`.

### Step 2: Add Environment Variables
Create a `.env.local` file in the root of your project with the following content:

```bash
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_generated_app_password

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# portfolio-nextjs
