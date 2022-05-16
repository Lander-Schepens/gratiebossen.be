const option = document.getElementById("routes");

option.onchange = function(){
    console.log('yea yea');
    document.getElementById("routeAfbeelding").src = `images/${option.value}.png`;
    if(option.value==='11km'){
    document.getElementById('link').href = 'https://www.maps.ie/map-my-route/viewMap.php?route=207509';}
    else if(option.value==='5km'){
        document.getElementById('link').href = 'https://www.maps.ie/map-my-route/viewMap.php?route=207511';}
    
    else if(option.value==='4km'){
        document.getElementById('link').href = 'https://www.maps.ie/map-my-route/viewMap.php?route=207513';}
}