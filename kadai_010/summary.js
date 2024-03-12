$(function() {
  // 文字色を青にする
  $('#change-color').on('click', function() {
    $('#target').css('color', 'blue');
  });

  // 内容を変更する
  $('#change-text').on('click', function() {
    $('#target').text('Hola!');
  });

  // フェードアウトする
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

  // フェードインする
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});
