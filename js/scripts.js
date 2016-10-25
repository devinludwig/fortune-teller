$(document).ready(function() {
  $("form").submit(function(event) {
    // var unluckyArray = [];
    // var luckyArray = [];

    event.preventDefault();

    var luckyTotal = 0;
    var unluckyTotal = 0;

    $("input:checkbox[name=lucky]:checked").each(function() {
        luckyTotal += 1;
      });

    $("input:checkbox[name=unlucky]:checked").each(function() {
        unluckyTotal+= 1;
    });

      // $("input:checkbox[name=unlucky]:checked").each(function(){
    //   var unluckyInput = $(this).val();
    //   unluckyArray.push(unluckyInput);
    // });
    // $("input:checkbox[name=lucky]:checked").each(function(){
    //   var luckyInput = $(this).val();
    //   luckyArray.push(luckyInput);
    //
    // });
    // var unluckyTotal = unluckyArray.length;
    // var luckyTotal = luckyArray.length;

    if(unluckyTotal > luckyTotal) {
      $("#unlucky").show();
    } else if(unluckyTotal === luckyTotal) {
      $("#neutral").show();
    } else {
      $("#lucky").show();
    }
    $("#results").show();
    $("form").hide();
  });
  $("#results button").click(function(){
    location.reload();
  });
});
