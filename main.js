$(function() {
  'use strict';

  const tablist = $("#tab_head li");
  const tabbody = $("#tab_body li");

  tablist.click(function(){
    const idx = tablist.index($(this));
    tablist.removeClass("on").eq(idx).addClass("on");
    tabbody.removeClass("on").eq(idx).addClass("on");
  });

});
