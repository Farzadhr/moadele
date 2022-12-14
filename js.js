function d1(ax, a, b) {
  var apb = b - a;
  var res = apb / ax;
  return res;
}
$("#bresd1").click(function (e) {
  var ax = Number($("#ax").val());
  var a = Number($("#a").val());
  var b = Number($("#b").val());
  $("#resd1").html(d1(ax, a, b));
});

function d2(ax, bx, c, z) {
  var nc = 0;
  if (z != 0) {
    nc = c - z;
  } else {
    nc = c;
  }

  var delta = Math.pow(bx, 2) - 4 * ax * nc;
  var reses = [];
  reses[0] = (bx * -1 + delta) / (2 * ax);
  reses[1] = (bx * -1 - delta) / (2 * ax);

  return reses;
}
$("#bresd2").click(function (e) {
  var ax = Number($("#axd2").val());
  var bx = Number($("#bx").val());
  var c = Number($("#c").val());
  var z = Number($("#z").val());
  var res = "";
  d2(ax, bx, c, z).forEach((v, i) => {
    if (i == 0) {
      res += v;
    } else {
      res += "," + v;
    }
  });
  $("#resd2").html(res);
});
