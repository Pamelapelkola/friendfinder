const getUID = () => { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
};

$(document).on('click', '.subBtn', ()=>{
    event.preventDefault();
    let currentURL = window.location.origin
    // let qArr = [parseInt($("#question-1").val()), parseInt($("#question-2").val()), parseInt($("#question-3").val()), parseInt($("#question-4").val()), parseInt($("#question-5").val()), parseInt($("#question-6").val()), parseInt($("#question-7").val()), parseInt($("#question-8").val()), parseInt($("#question-9").val()), parseInt($("#question-10").val()), ];
    let qArr = [];
    for (let i = 1; i < 11; i++) {
        let q = parseInt($("#question-" + i).val())
        console.log(q);
        qArr.push(q);
    }
    let newFriend = {
        name : $("#name-input").val().trim(),
        photo: $("#photo-input").val().trim(),
        scores: qArr,
        uid: getUID()
    }
    console.log(newFriend);
    $.ajax({
        type: "POST",
        url: currentURL + "/api/friends",
        data: JSON.stringify(newFriend),
        contentType: 'application/json',
        success: (res)=>{
            if (res) {
                alert("You've been submitted!")
            }
            else {
                alert("Something went wrong...")
            }
            $("#name-input").val("");
            $("#photo-input").val("");
            $("#question-1").val("1");
            $("#question-2").val("1");
            $("#question-3").val("1");
            $("#question-4").val("1");
            $("#question-5").val("1");
            $("#question-6").val("1");
            $("#question-7").val("1");
            $("#question-8").val("1");
            $("#question-9").val("1");
            $("#question-10").val("1");
        },
        error: (err)=>{
            throw err;
        }
    }).done((data)=>{
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);
        $("#results-modal").modal("toggle");
    });
})