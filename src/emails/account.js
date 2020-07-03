const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'tobias.steinhagen@googlemail.com',
		subject: 'Thanks for joining in!',
		text: `Welcome to the app, ${name}. Let me know how to et along with the app.`,
	})
}

const sendFollowupEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'tobias.steinhagen@googlemail.com',
		subject: 'Why are you leaving us?',
		text: `Hello ${name}, what can we do for you, not to leave`,
	})
}

module.exports = { sendWelcomeEmail, sendFollowupEmail }
