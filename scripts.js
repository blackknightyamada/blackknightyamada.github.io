$('#monthSubmit').on('click', function() {
    var month = parseInt($('#inputMonth').val()); // 月

    if (isNaN(month)) { // 数値に変換できたか確認
        danger("数字を入力してください");
        return;
    }

    if (month < 1 || month > 12) { // 範囲内の数値か確認
        danger("1～12の数字を入力してください")
        return;
    }
    info("読み込み中...");
    setLocation(month); // ページを移動
});

$('#s_monthSubmit').on('click', function () {
    var month = parseInt($('#monthSelect').val());

    if (isNaN(month)) { // 数値に変換できたか確認
        danger("数字を入力してください");
        return;
    }

    if (month < 1 || month > 12) { // 範囲内の数値か確認
        danger("1～12の数字を入力してください")
        return;
    }
    info("読み込み中...");
    setLocation(month); // ページを移動
});

function danger(message) {
    $('#alertMsg').removeClass('alert-info');
    $('#alertMsg').addClass('alert-danger');
    myAlert(message);
}

function info(message) {
    $('#alertMsg').addClass('alert-info');
    $('#alertMsg').removeClass('alert-danger');
    myAlert(message);
}

function myAlert(message) {
    $('#alertMsg').text(message);
    $('#alertMsg').removeClass('invisible');
    $('#alertMsg').addClass("visible");
}

function setLocation(month) {
    if (month < 1 || month > 12) { // 範囲外チェック
        return; // 返す
    }
    switch (month) { // 月によって処理を切り替え
        case 3: //
        case 4: // 春の場合
        case 5: //
            window.location.href = "/spring/";
            break;
        case 6: //
        case 7: // 夏の場合
        case 8: //
            window.location.href = "/summer/";
            break;
        case 9: //
        case 10:// 秋の場合
        case 11://
            window.location.href = "/autum/";
            break;
        default:// その他(冬の場合)
            window.location.href = "/winter/";
            break;
    }
}

// container
var currentContainer = "textInput";
var containers = [ "textInput", "listInput" ];

// setvisible container
function setVisible(targetContainer) {
    if (!containers.includes(targetContainer)) {
        return
    }
    containers.forEach((container) => {
        if (container == targetContainer) {
            $("#" + container + "Button").addClass("selected");
            $("#" + container).addClass("visible");
            $("#" + container).removeClass("invisible");
            return;
        }
        $("#" + container).addClass("invisible");
        $("#" + container).removeClass("visible");
        $("#" + container + "Button").removeClass("selected");
    });
    currentContainer = targetContainer;
}

// register containers
containers.forEach((container) => {
    $("#" + container + "Button").on("click", function() {
        setVisible(container);
    });
});
