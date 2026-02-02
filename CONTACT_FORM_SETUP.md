# Contact Form Setup (Formspree – Free)

Your contact form is set up to use **Formspree** so you receive every submission by email at **dani.dluxmarketing@gmail.com**, without needing Netlify’s paid form add-on.

## Where does Formspree send the emails?

Formspree sends submissions to **the email address on your Formspree account**. There is often no separate “Send emails to” field when you create a form.

**Easiest option:** Sign up at Formspree **using dani.dluxmarketing@gmail.com**. Then every form you create will send submissions to that address by default.

If you already signed up with a different email and want to use **dani.dluxmarketing@gmail.com** instead:
1. Log in at **https://formspree.io**
2. Open your **account or profile settings** (click your name/avatar, or look for “Account” / “Settings”).
3. Add **dani.dluxmarketing@gmail.com** as an email and **verify it** (Formspree will send a verification link to that inbox).
4. After it’s verified, check your **form’s settings** (click the form name, then look for “Settings”, “Notifications”, or “Email”) and set the notification email to **dani.dluxmarketing@gmail.com** if that option appears.

If you don’t see a way to change the email for a form, use the account that has **dani.dluxmarketing@gmail.com** as its main or verified email so submissions go there.

---

## One-time setup (about 2 minutes)

### 1. Create a Formspree account and form

1. Go to **https://formspree.io**
2. Click **Get Started** and sign up (free).  
   **Use dani.dluxmarketing@gmail.com** as your sign-up email so submissions go there.
3. Verify your email if Formspree asks you to (check the inbox for dani.dluxmarketing@gmail.com).
4. In the dashboard, click **+ New Form** (or **Create form**).
5. Give the form a name (e.g. “DLux Contact”).  
   If you see a **“Send emails to”** or **“Email”** field, set it to **dani.dluxmarketing@gmail.com**. If you don’t see it, that’s normal — submissions will go to your account email (dani.dluxmarketing@gmail.com if you signed up with it).
6. Click **Create Form**.

### 2. Get your form ID

After the form is created, Formspree shows a URL like:

`https://formspree.io/f/xyzabcde`

The part after `/f/` is your **form ID** (e.g. `xyzabcde`). Copy it.

### 3. Put the form ID in your site

1. Open **contact.html** in your project.
2. Find this line (near the top of the form):

   `action="https://formspree.io/f/REPLACE_WITH_FORM_ID"`

3. Replace **REPLACE_WITH_FORM_ID** with your actual form ID.

   Example: if your ID is `xyzabcde`, the line should be:

   `action="https://formspree.io/f/xyzabcde"`

4. Save **contact.html** and deploy (e.g. push to GitHub so Netlify redeploys).

### 4. Test

Visit your live contact page, fill out the form, and submit. You should get an email at **dani.dluxmarketing@gmail.com** (check spam the first time).

---

## Formspree free tier

- **50 submissions per month** on the free plan.
- Emails go to the address you set (dani.dluxmarketing@gmail.com).
- Submissions are also visible in your Formspree dashboard.
- No server or Netlify add-ons required.

Once the form ID is in **contact.html** and the site is deployed, the form will work and you’ll receive submissions by email on the free Netlify plan.
