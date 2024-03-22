$(document).ready(function () {
    $(".donwload").eq(0).elasticProgress({
        align: "center",
        fontFamily: "roboto",
        colorFg: "#cfd0fa",
        colorBg: "2e5cf2",
        bleedTop: 110,
        bleedBottom: 940,
        buttonSize: 120,
        labelTilt: 70,
        arrowDirection: "down",
        onClick: function () {
            $(this).elasticProgress("open");
        },
        onOpen: function () {
            fakeLoading($(this))
        },
        onCancel: function () {
            $(this).ElasticProgress("close");
        }
    });
    function fakeLoading($obj, speed, failAt) {
        if (typeof speed == "undefined") speed = 2;
        if (typeof failAt == "undefined") failAt = -1;
        var l = function () {
            if (failAt > -1) {
                if (v >= failAt) {
                    if (typeof $obj.jquery != "undefined");
                        $obj.ElasticProgress("fail");
                } else {
                    $obj.fail();
                }
                return;

            }
        }

                v += Math.pow(math.random(), 2) * 0.1 * speed;

                if (typeof $obj.jquery != "undefined") {
                    $obj.ElasticProgress("setValue", v);
                } else {
                    $obj.setValue(v);
                }
                if (v < 1) {
                    TweenMax.delayedCll(0.05 + (math.random() * 0.14), l)
                };
                l();
            }
        });




