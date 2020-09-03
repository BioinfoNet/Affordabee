//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
//var key = "https://docs.google.com/spreadsheets/d/113QZOTS9JQ1WGfwjwQrOpErUBJTAnaBmdjP0_OjA53c/pubhtml?gid=489792061&single=true";
//var key = "https://docs.google.com/spreadsheets/d/1azEpwRap_KPLvErTATEkBdZyt79nnDWahsTG4X3OqVI/pubhtml?gid=0&single=true";
var key = "https://docs.google.com/spreadsheets/d/1KaCmBzgGr6KpadTU5YcclARC6zJfX19rM2d8Hd7MQag/pubhtml?gid=0&single=true";


//"data" refers to the column name with no spaces and no capitals
	//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [ 
    { "data": "publisher", "title": "Publisher" },
    { "data": "scope", "title": "Scope" },
    { "data": "waivereligibilitycriteria", "title": "Waiver Eligibility Criteria" },
    { "data": "waivereligibilitymode", "title": "Waiver Eligibility Mode" },
    { "data": "waiveramount", "title": "Waiver Amount" },
    { "data": "waiverapplicationprocess", "title": "Waiver Application Process" },
    { "data": "sourcelink", 
      "render":function(data, type, row, meta){
        if(type === 'display'){
            data = '<a href="' + data + '" target = _blank>' + "Link &#128279;" + '</a>';
        }
        return data;
        },
        "title": "Link" },
    { "data": "otheropensciencepractices", "title": "Other OpenScience Practices" }];

$(document).ready(function() {

    function initializeTabletopObject(){
    Tabletop.init({
        key: key,
        callback: function(data, tabletop) { 
            writeTable(data); //call up datatables function
            }, 
        simpleSheet: true,
        debug: false
    });
}

    initializeTabletopObject();

    function writeTable(data){
        //select main div and put a table there
		//use bootstrap css to customize table style: http://getbootstrap.com/css/#tables 
        $('#graphic').html('<table cellpadding="0" cellspacing="0" border="0" id="mySelection"></table>');

        //initilize the DataTable object and put settings in
        $("#mySelection").DataTable({
            "data": data,
            "columns": columns,
            // "columnDefs": [
            //     { "visible": false, "targets": 7 }
            //  ],
            //"order":[[1, "desc"]], //order on 1st column
            "pagingType": "simple" //no page numbers
			//uncomment these options to simplify your table
			//"paging": false,
			//"searching": false,
			//"info": false
            });
        }
});
//end of writeTable



