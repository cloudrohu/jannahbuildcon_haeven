jQuery.validator.addMethod("mobile", function(value, element) {
    return this.optional(element) || value.match(/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/);
}, "Enter 10 digit number");

jQuery.validator.addMethod("alphabets", function(value, element) {
    return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
}, "Please enter Alphabets only");

jQuery.validator.addMethod("email", function(value, element) {
    return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}, "Please enter a valid email address.");

var priceValidate;
var instantValidate;

if ($('#EnquierFrm').length > 0) {
    $('#EnquierFrm').validate({
        rules: {
            name: {
                required: true,
                alphabets: true,
                maxlength: 100
            },
            CountryCode: {
                required: true
            },
            mobile: {
                required: true,
                number: true,
                mobile: true,
                minlength: 10,
                maxlength: 10
            },
            email: {
                required: true,
                email: true
            },
            /*comment: {
              required: true,
            }*/
        },
        submitHandler: function(form) {
            $(form).find(':submit').prop('disabled', true);
            form.submit();
        }
    });
}

if ($('#FooterForm').length > 0) {
    $('#FooterForm').validate({
        rules: {
            name: {
                required: true,
                alphabets: true,
                maxlength: 100
            },
            lastname: {
                required: true,
                alphabets: true,
                maxlength: 100
            },
            CountryCode: {
                required: true
            },
            mobile: {
                required: true,
                number: true,
                mobile: true,
                minlength: 10,
                maxlength: 10
            },
            email: {
                required: true,
                email: true
            },
            /*comment: {
              required: true,
            }*/
        },
        submitHandler: function(form) {
            $(form).find(':submit').prop('disabled', true);
            form.submit();
        }
    });
}


if ($('#PopupForm').length > 0) {
    $('#PopupForm').validate({
        rules: {
            name: {
                required: true,
                alphabets: true,
                maxlength: 100
            },
            CountryCode: {
                required: true
            },
            location: {
                required: true
            },

            mobile: {
                required: true,
                number: true,
                mobile: true,
                minlength: 10,
                maxlength: 10
            },
            email: {
                required: true,
                email: true
            },
            /*comment: {
                required: true,
              }*/
        },
        submitHandler: function(form) {
            $(form).find(':submit').prop('disabled', true);
            form.submit();
        }
    });
}


if ($('#pricepopup').length > 0) {
    priceValidate = $('#pricepopup').validate({
        rules: {
            name: {
                required: true,
                alphabets: true,
                maxlength: 100
            },
            CountryCode: {
                required: true
            },
            mobile: {
                required: true,
                number: true,
                mobile: true,
                minlength: 10,
                maxlength: 10
            },
            location: {
                required: true
            },

            email: {
                required: true,
                email: true
            },
            /*comment: {
                required: true,
              }*/
        },
        submitHandler: function(form) {
            $(form).find(':submit').prop('disabled', true);
            form.submit();
        }
    });
}

if ($('#InstantCallback').length > 0) {
    instantValidate = $('#InstantCallback').validate({
        rules: {
            name: {
                required: true,
                alphabets: true,
                maxlength: 100
            },
            CountryCode: {
                required: true
            },
            mobile: {
                required: true,
                number: true,
                mobile: true,
                minlength: 10,
                maxlength: 10
            },
            location: {
                required: true
            },

            email: {
                required: true,
                email: true
            },
            /*comment: {
                required: true,
              }*/
        },
        submitHandler: function(form) {
            $(form).find(':submit').prop('disabled', true);
            form.submit();
        }
    });
}

if ($('#inquiryForm').length > 0) {
    $('#inquiryForm').validate({
        rules: {
            name: {
                required: true,
                alphabets: true,
                maxlength: 100
            },
            CountryCode: {
                required: true
            },
            mobile: {
                required: true,
                number: true,
                mobile: true,
                minlength: 10,
                maxlength: 10
            },
            location: {
                required: true
            },

            email: {
                required: true,
                email: true
            }

        },
        submitHandler: function(form) {
            $(form).find(':submit').prop('disabled', true);
            form.submit();
        }
    });
}

if ($('#sitevisit').length > 0) {
    $('#sitevisit').validate({
        rules: {
            name: {
                required: true,
                alphabets: true,
                maxlength: 100
            },
            CountryCode: {
                required: true
            },
            mobile: {
                required: true,
                number: true,
                mobile: true,
                minlength: 10,
                maxlength: 10
            },
            location: {
                required: true
            },

            email: {
                required: true,
                email: true
            }

        },
        submitHandler: function(form) {
            $(form).find(':submit').prop('disabled', true);
            form.submit();
        }
    });
}



if ($('#speake_to_expert').length > 0) {
    $('#speake_to_expert').validate({
        rules: {
            mobile: {
                required: true,
                number: true,
                mobile: true,
                minlength: 10,
                maxlength: 10
            },
            CountryCode: {
                required: true
            }
        },
        submitHandler: function(form) {
            $(form).find(':submit').prop('disabled', true);
            form.submit();
        }
    });
}

/*popup js starts here*/
// $(window).load(function() {
//   if (!Get_Cookie('popout')) {
//       window.setTimeout(function() {
//         $('#popupModal').modal('show');
//       }, 3000);
//   }
// });

// $('#popupModal .close').click(function() {
//   Set_Cookie('popout', 'it works');
// });
// $('#popupModal').on('hide.bs.modal',function(){
//   Set_Cookie('popout', 'it works');
// });

$('#DownloadBrchure').click(function() {
    var inquirePopup = $('#enquiry-form');
    inquirePopup.find('input[name=source]').val('Download Brochure');
    inquirePopup.modal('show');
});
$('#DownloadBrchuremob').click(function() {
    var inquirePopup = $('#enquiry-form');
    inquirePopup.find('input[name=source]').val('Download Brochure');
    inquirePopup.modal('show');
});
$('#btndown').click(function() {
    var inquirePopup = $('#enquiry-form');
    inquirePopup.find('input[name=source]').val('Download Brochure');
    inquirePopup.modal('show');
});
// $('.planenquiry').click(function(){
//   var inquirePopup = $('#enquiry-form');
//   inquirePopup.find('input[name=source]').val('Floor Plan Form');
//   inquirePopup.modal('show');
// });
$('.clickenquiretbn').click(function() {
    var inquirePopup = $('#enquiry-form');
    inquirePopup.find('input[name=source]').val('Inquiry Form');
    inquirePopup.modal('show');
});
$('.btnenquiry').click(function() {
    var inquirePopup = $('#enquiry-form');
    inquirePopup.find('input[name=source]').val('Inquiry Form');
    inquirePopup.modal('show');
});

/*popup js ends here*/

jQuery(function($) {
    $(document).ready(function() {
        "use strict";
        var instantFlag = false;
        var hotlineFlag = false;
        $("#instant-callback-div .instant-switch").click(function() {
            $('#instant-callback-div').addClass('opened');
            $("#instant-callback-div").animate({
                "right": $("#instant-callback-div").css('right') == "-1px" ? "-247px" : "-1px"
            }, 500);
            instantFlag = true;
            if (hotlineFlag) {
                $("#hotline-div").animate({
                    "right": "-277px"
                }, 500);
                hotlineFlag = false;
            }
        });
        $("#hide").click(function() {
            $('#instant-callback-div').removeClass('opened');
            $("#instant-callback-div").animate({
                "right": "-247px"
            }, 500);
            instantFlag = false;
            $('#InstantCallback').find('.has-error').removeClass('has-error');
            instantValidate.resetForm();
        });

        $("#hotline-div .hotline-switch").click(function() {
            $("#hotline-div").animate({
                "right": "-1px"
            }, 500);
            hotlineFlag = true;
            if (instantFlag) {
                $("#instant-callback-div").animate({
                    "right": "-246px"
                }, 500);
                instantFlag = false;
            }
        });
        $("#hide-hotline").click(function() {
            $("#hotline-div").animate({
                "right": "-245px"
            }, 500);
            hotlineFlag = false;
        });
    });
});
// function submitUserForm(str) {
//   if (recaptcha_response.length == 0) {
//     document.getElementById(str).innerHTML =
//       '<span style="color:red;">This field is required.</span>';
//     return 0;
//   }
//   return 1;
// }