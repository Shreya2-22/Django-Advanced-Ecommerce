// some scripts

// jquery ready start
$(document).ready(function () {
  // jQuery code

  /* ///////////////////////////////////////

    THESE FOLLOWING SCRIPTS ONLY FOR BASIC USAGE, 
    For sliders, interactions and other

    */ ///////////////////////////////////////

  //////////////////////// Prevent closing from click inside dropdown
  $(document).on("click", ".dropdown-menu", function (e) {
    e.stopPropagation();
  });

  $(".js-check :radio").change(function () {
    var check_attr_name = $(this).attr("name");
    if ($(this).is(":checked")) {
      $("input[name=" + check_attr_name + "]")
        .closest(".js-check")
        .removeClass("active");
      $(this).closest(".js-check").addClass("active");
      // item.find('.radio').find('span').text('Add');
    } else {
      item.removeClass("active");
      // item.find('.radio').find('span').text('Unselect');
    }
  });

  $(".js-check :checkbox").change(function () {
    var check_attr_name = $(this).attr("name");
    if ($(this).is(":checked")) {
      $(this).closest(".js-check").addClass("active");
      // item.find('.radio').find('span').text('Add');
    } else {
      $(this).closest(".js-check").removeClass("active");
      // item.find('.radio').find('span').text('Unselect');
    }
  });

  //////////////////////// Bootstrap tooltip
  if ($('[data-toggle="tooltip"]').length > 0) {
    // check if element exists
    $('[data-toggle="tooltip"]').tooltip();
  } // end if
  console.log(
    ">> script.js: DOM ready. #message length =",
    $("#message").length
  );
  setTimeout(function () {
    console.log(">> 4s timer fired; hiding #message");
    $("#message").fadeOut("slow");
  }, 4000);
});
// jquery end
