function createRequest ()
{
	var request = null;
	try
	{
		request = new XMLHttpRequest ();
	}
	catch (e)
	{
		try
		{
			request = new ActiveXObject ("Microsoft.XMLHTTP");
		}
		catch (e) {}
	}
	return request;
}

function getFile (name)
{

	var req = createRequest ();
	req.open('GET', name, false);
//	req.overrideMimeType('text/plain; charset=windows-1251');
	req.send(null);
	document.getElementById ('mytext').firstChild.data = req.responseText;

}

window.onload = getFile('data.txt');