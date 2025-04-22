function isSet(val) {
    if ((val != undefined) && (val != null) && ($.trim(val) != '')) {
        return true;
    }
    return false;
};

function Set_Cookie(name, value, expires, path, domain, secure) {
    var today = new Date();
    today.setTime(today.getTime());
    if (expires) {
        expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date(today.getTime() + (expires));
    document.cookie = name + "=" + escape(value) + ((expires) ? ";expires=" + expires_date.toGMTString() : "") + ((path) ? ";path=" + path : "") + ((domain) ? ";domain=" + domain : "") + ((secure) ? ";secure" : "");
}

function Get_Cookie(check_name) {
    // first we'll split this cookie up into name/value pairs
    // note: document.cookie only returns name=value, not the other components
    var a_all_cookies = document.cookie.split(';');
    var a_temp_cookie = '';
    var cookie_name = '';
    var cookie_value = '';
    var b_cookie_found = false; // set boolean t/f default f
    for (var i = 0; i < a_all_cookies.length; i++) {
        a_temp_cookie = a_all_cookies[i].split('=');
        cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
        if (cookie_name == check_name) {
            b_cookie_found = true;
            if (a_temp_cookie.length > 1) {
                cookie_value = unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g, ''));
            }
            return cookie_value;
            break;
        }
        a_temp_cookie = null;
        cookie_name = '';
    }
    if (!b_cookie_found) {
        return null;
    }
}

function Delete_Cookie(name, path, domain) {
    if (Get_Cookie(name))
        document.cookie = name + "=" + ((path) ? ";path=" + path : "") + ((domain) ? ";domain=" + domain : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}
$(document).ready(function() {
    $.extend({
        getQueryString: function(name) {
            function parseParams() {
                var params = {},
                    e,
                    a = /\+/g,
                    r = /([^&=]+)=?([^&]*)/g,
                    d = function(s) {
                        return decodeURIComponent(s.replace(a, " "));
                    },
                    q = window.location.search.substring(1);
                while (e = r.exec(q))
                    params[d(e[1])] = d(e[2]);
                return params;
            }
            if (!this.queryStringParams)
                this.queryStringParams = parseParams();
            return this.queryStringParams[name];
        }
    });
    var Campaign = $.getQueryString('Campaign');
    if (isSet(Campaign)) {
        Delete_Cookie('Lead_Campaign');
        Set_Cookie('Lead_Campaign', Campaign);
    }
    var AdGroup = $.getQueryString('AdGroup');
    if (isSet(AdGroup)) {
        Delete_Cookie('Lead_AdGroup');
        Set_Cookie('Lead_AdGroup', AdGroup);
    }
    var Keyword = $.getQueryString('Lead_Keyword');
    if (isSet(Keyword)) {
        Delete_Cookie('Lead_Keyword');
        Set_Cookie('Lead_Keyword', Keyword);
    }
    var MatchType = $.getQueryString('MatchType');
    if (isSet(MatchType)) {
        Delete_Cookie('Lead_MatchType');
        Set_Cookie('Lead_MatchType', MatchType);
    }
    var Distribution = $.getQueryString('Distribution');
    if (isSet(Distribution)) {
        Delete_Cookie('Lead_Distribution');
        Set_Cookie('Lead_Distribution', Distribution);
    }
    var AdID = $.getQueryString('AdID');
    if (isSet(AdID)) {
        Delete_Cookie('Lead_AdID');
        Set_Cookie('Lead_AdID', AdID);
    }
    var Placement = $.getQueryString('Lead_Placement');
    if (isSet(Placement)) {
        Delete_Cookie('Lead_Placement');
        Set_Cookie('Lead_Placement', Placement);
    }
    var Channel = $.getQueryString('Channel');
    if (isSet(Channel)) {
        Delete_Cookie('Lead_Channel');
        Set_Cookie('Lead_Channel', Channel);
    }
    var Device = $.getQueryString('Lead_Device');
    if (isSet(Device)) {
        Delete_Cookie('Lead_Device');
        Set_Cookie('Lead_Device', Device);
    }
    var srd = $.getQueryString('srd');
    if (isSet(srd)) {
        Delete_Cookie('Lead_Srd');
        Set_Cookie('Lead_Srd', srd);
    }
    var utmsource = $.getQueryString('utm_source');
    if (isSet(utmsource)) {
        Delete_Cookie('utm_source');
        Set_Cookie('utm_source', utmsource);
    }
    var utmcampaign = $.getQueryString('utm_campaign');
    if (isSet(utmcampaign)) {
        Delete_Cookie('utm_campaign');
        Set_Cookie('utm_campaign', utmcampaign);
    }
    var utmmedium = $.getQueryString('utm_medium');
    if (isSet(utmmedium)) {
        Delete_Cookie('utm_medium');
        Set_Cookie('utm_medium', utmmedium);
    }
    var AdCreative = $.getQueryString('utm_adcreative');
    if (isSet(AdCreative)) {
        Delete_Cookie('utm_adcreative');
        Set_Cookie('utm_adcreative', AdCreative);
    }
    var AdSet = $.getQueryString('utm_adset');
    if (isSet(AdSet)) {
        Delete_Cookie('utm_adset');
        Set_Cookie('utm_adset', AdSet);
    }

    var CID = $.getQueryString('cid');
    if (isSet(CID)) {
        Delete_Cookie('cid');
        Set_Cookie('cid', CID);
    }
    var utmsubsource = $.getQueryString('utm_sub_source');
    if (isSet(utmsubsource)) {
        Delete_Cookie('utm_sub_source');
        Set_Cookie('utm_sub_source', utmsubsource);
    }
});