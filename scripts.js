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

    myAlert("季節はXXです");
});

function myAlert(message) {
    $('#alertMsg').text(message)
    $('#alertMsg').removeClass('invisible');
    $('#alertMsg').addClass("visible");
}