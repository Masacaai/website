const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
  };

  const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
  };

  let darkmode = localStorage.getItem('darkmode');
  if (darkmode === 'active') enableDarkmode();