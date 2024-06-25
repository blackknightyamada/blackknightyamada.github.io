$('#monthSubmit').on('click', function() {
    var month = parseInt($('#inputMonth').val()); // 月

    if (isNaN(month)) { // 数値に変換できたか確認
        myAlert("数字を入力してください");
        return;
    }

    if (month < 1 || month > 12) { // 範囲内の数値か確認
        myAlert("1～12の数字を入力してください")
        return;
    }
    myAlert("読み込み中...");
    setLocation(month);
});

function myAlert(message) {
    $('#alertMsg').text(message);
    $('#alertMsg').removeClass('invisible');
    $('#alertMsg').addClass("visible");
}

function setLocation(month) {
    if (month < 1 || month > 12) {
        return;
    }
    switch (month) {
        case 3:
        case 4:
        case 5:
            window.location.href = "/spring/";
            break;
        case 6:
        case 7:
        case 8:
            window.location.href = "/summer/";
            break;
        case 9:
        case 10:
        case 11:
            window.location.href = "/autum/";
            break;
        default:
            window.location.href = "/winter/";
            break;
    }
}