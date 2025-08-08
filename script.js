function showToast() {
    var toastEl = document.getElementById('submitToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 2000);
}