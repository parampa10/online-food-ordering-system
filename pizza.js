var selection=[];

function select(e)
{
	var total=0;
	selection.push(e.target.id);

	total=parseInt(total) + parseInt(document.getElementsByClassName(e.target.id).value);
	
	document.getElementById("selection").innerHTML=selection;
	// document.getElementById("total").innerHTML=total;

}

