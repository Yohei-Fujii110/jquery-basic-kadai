$(function() {
  // ボタンをクリックしたときに
  $('.btn').on('click', function() {

    // ボタンの縁を青くする
    $(this).css('border', 'solid 2px blue');

    // テキストボックスのvalueが'クリックしました！'に変更
    $('.text-box').val('クリックしました！');
  });
});
