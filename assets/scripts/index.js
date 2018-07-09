
$(() => {
  $('.menu').hover((event) => $(`#${event.target.id}`).css('color', 'black'),
  (event) => $(`#${event.target.id}`).css('color', '#494444'))
})
