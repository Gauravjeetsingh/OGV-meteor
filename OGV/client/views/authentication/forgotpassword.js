/**
 * Things to do when submit button of forgot-password-form
 * is clicked 
 */

Template.forgotPassword.events({
    'submit #forgot-password-form':function(e,t)
    {
	e.preventDefault();
        
	var forgotPasswordForm = $(e.currentTarget),
	    email = trimInput(forgotPasswordForm.find('#forgot-password-email').val().toLowerCase());
        /** 
         * Send an email to the user if he forgets the password
         */
	if (isNotEmpty(email) &&
	    isEmail(email)) {
	    Accounts.forgotPassword({email:email},function(err){
		if (err) {
		    Session.set('alert',err);
	        } else {
		    Session.set('alert','Email Sent, Please check your mailbox to reset your password');
	        }
	    });
	}
	return false;
    },
    
    /**
     * return to log in form
     */
 
    'click #returnToLogIn': function(e,t)
    {
	Session.set('showForgotPassword',null);
	return false;
    },
});