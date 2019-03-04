function user_info()
{
	var xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://api.ipstack.com/check?access_key=ACCESS_KEY&output=json', false);
		xhr.send();

	if (xhr.readyState != 4) return;

	if (xhr.status != 200) {
		alert(xhr.status + ': ' + xhr.statusText);
	} else {
		var data = JSON.parse(xhr.responseText);
		return data;
	}
}

function get_data(zip, ip, ref, ci, homeowner, age)
{
	if (zip)
		zip = encodeURIComponent(zip);

	if (ip)
		ip  = encodeURIComponent(ip);

	if (ref)
		ref = encodeURIComponent(ref);

	var xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://nextinsure.quinstage.com/listingdisplay/display/?ni_ad_client=15&ci='+ ci +'&homeowner='+ homeowner +'&age='+ age +'&ni_zc='+ zip +'&ip='+ ip +'&ni_ref='+ ref, false);
		xhr.send();

	if (xhr.readyState != 4) return;

	if (xhr.status != 200) {
		alert(xhr.status + ': ' + xhr.statusText);
	} else {
		var data = JSON.parse(xhr.responseText);
		return data;
	}

}