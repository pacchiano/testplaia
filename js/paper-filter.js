$('input:radio[name="topicRadio"]').change(function () {
    // alert(this.id)
    var selected = this.id;
    $("#topicCards > div").filter(function () {
        $(this).toggle(
            selected == "All" ||
            $(this).attr("data-topics").indexOf(selected) > -1
        )
    });
});
