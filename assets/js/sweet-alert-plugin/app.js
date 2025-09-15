// Sweet alert JS

(function () {
  var SweetAlert_custom = {
    init: function () {
      document.querySelector(".sweet-15", ".sweet-16").onclick = async function () {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          title: 'Success!',
          icon: "success",
          title: "Saved successfully.",
        });
      };
    },
  };

  SweetAlert_custom.init();
})();
