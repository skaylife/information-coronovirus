window.onload = function() {
	getCovidStats();
	
}

function getCovidStats() {
	fetch('https://api.covid19api.com/summary')
	.then(function(resp) { return resp.json() })
	.then(function(data) {


		let NewConfirmed = data.Global.NewConfirmed;
		let TotalConfirmed = data.Global.TotalConfirmed;
		let NewDeaths = data.Global.NewDeaths;
		let TotalDeaths = data.Global.TotalDeaths;
		let NewRecovered = data.Global.NewRecovered;
		let TotalRecovered = data.Global.TotalRecovered;





		// let population = data.Global.TotalConfirmed;
		// let update = data.Global.TotalDeaths;
		// let confirmedCases = data.location.latest.confirmed;
		// let deaths = data.location.latest.deaths;

		
		// <td>${data.Global.TotalConfirmed}</td>
		// <td>${data.Global.TotalDeaths}</td>
		// <td>${data.Global.TotalRecovered}</td>
		
		document.getElementById('NewConfirmed').innerHTML = NewConfirmed.toLocaleString('en');
		document.getElementById('TotalConfirmed').innerHTML = TotalConfirmed.toLocaleString('en');
		document.getElementById('NewDeaths').innerHTML = NewDeaths.toLocaleString('en');
		document.getElementById('TotalDeaths').innerHTML = TotalDeaths.toLocaleString('en');
		document.getElementById('NewRecovered').innerHTML = NewRecovered.toLocaleString('en');
		document.getElementById('TotalRecovered').innerHTML = TotalRecovered.toLocaleString('en');
	
		
	})
}

function refreshData() {
	clearData()
	init()
}

function clearData(){
	$("#data").empty()
}


