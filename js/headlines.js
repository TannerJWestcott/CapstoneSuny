 var espnNOW = 'http://api.espn.com/v1/now/popular/?apikey=nd7ah6332wafuhfmeneywb2j';


        $.getJSON(espnNOW, function(data) {
      var news = [];
      var author = [];
      var description = [];
      var images = [];
      var links = [];

      //var imArrayLength = data.feed[1].images.length;


      console.log(data);
      console.log(data.feed[0].images.length);


    for(var i=0;i<10;++i){
      news[i] = data.feed[i].headline;
      author[i] = data.feed[i].byline;
      description[i] = data.feed[i].description;
      links[i] = data.feed[i].links;
    }

    for(var a=0;a<10;a++){
      images[a] = data.feed[a].images[0].url;
    }


  

	for(var j=0;j<10;j++){
	
	$("<h1/>",{
      "id": "headline",
		  html: "<a target='_blank' href='" + links[j].web.href + "'>" + news[j]  + "</a>"    
      }).appendTo(".test"); 

      $("<h2/>",{
        "id": "byline",
        html: author[j]        
      }).appendTo(".test");

      $("<p/>",{
        "id": "description",
        html: description[j]        
      }).appendTo(".test");

      $("<img/>",{
        "id": "image",
        "src": images[j]       
      }).appendTo(".test"); 
	  
    $("<hr>").appendTo(".test");
	  }
	/*
      $("<h1/>",{
        "id": "headline1",
        html: news[0]        
      }).appendTo(".test");

      $("<h2/>",{
        "id": "byline1",
        html: author[0]        
      }).appendTo(".test");

      $("<p/>",{
        "id": "description1",
        html: description[0]        
      }).appendTo(".test");

      $("<img/>",{
        "id": "image1",
        "src": images[0]       
      }).appendTo(".test");

  
      $("<h1/>",{
        "id": "headline2",
        html: news[1]        
      }).appendTo(".test");


      $("<h2/>",{
        "id": "byline2",
        html: author[1]        
      }).appendTo(".test");

      $("<p/>",{
        "id": "description2",
        html: description[1]        
      }).appendTo(".test");

      $("<h1/>",{
        "id": "headline3",
        html: news[2]        
      }).appendTo(".test");

      $("<h2/>",{
        "id": "byline3",
        html: author[2]        
      }).appendTo(".test");

      $("<p/>",{
        "id": "description3",
        html: description[2]        
      }).appendTo(".test");

      $("<h1/>",{
        "id": "hidne4",
        html: news[3]        
      }).appendTo(".test");

      $("<h2/>",{
        "id": "byline4",
        html: author[3]        
      }).appendTo(".test");

      $("<p/>",{
        "id": "description4",
        html: description[3]        
      }).appendTo(".test");

      $("<h1/>",{
        "id": "headline5",
        html: news[4]        
      }).appendTo(".test");

      
      $("<h2/>",{
        "id": "byline5",
        html: author[4]        
      }).appendTo(".test");
    
      $("<p/>",{
        "id": "description5",
        html: description[4]        
      }).appendTo(".test");
*/
  });



