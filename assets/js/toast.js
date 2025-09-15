const toastMap = {
    successToastBtn: 'successToast',
    errorToastBtn: 'errorToast'
};

Object.keys(toastMap).forEach(btnId => {
    const button = document.getElementById(btnId);
    const toastElement = document.getElementById(toastMap[btnId]);

    if (button && toastElement) {
        const toast = bootstrap.Toast.getOrCreateInstance(toastElement);
        button.addEventListener('click', () => toast.show());
    }
});