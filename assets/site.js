document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.nav-links')?.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>{if(location.pathname.endsWith(a.getAttribute('href')))a.classList.add('active')});

const navLinks = document.querySelector('.nav-links');
if (navLinks && !navLinks.querySelector('[data-config-link="GITHUB_URL"]')) {
  navLinks.insertAdjacentHTML('beforeend', '<a href="#" data-config-link="GITHUB_URL">GitHub</a>');
}

document.querySelectorAll('.footer-links').forEach(footer => {
  footer.innerHTML = '<a href="mailto:your-email@example.com">Email</a><a href="#" data-config-link="GITHUB_URL">GitHub</a><a href="resume.html">Resume</a><a href="projects.html">Projects</a>';
});

const config = typeof SITE_CONFIG === 'undefined' ? {} : SITE_CONFIG;
document.querySelectorAll('[data-config-link]').forEach(link => {
  const key = link.dataset.configLink;
  const url = config[key];
  if (url) {
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else if (link.dataset.optional === 'true') {
    link.hidden = true;
  } else {
    link.href = '#';
    link.classList.add('disabled-link');
    link.setAttribute('aria-disabled', 'true');
    link.title = `请在 assets/config.js 中配置 ${key}`;
    link.addEventListener('click', event => event.preventDefault());
  }
});

document.querySelectorAll('[data-config-label]').forEach(label => {
  const key = label.dataset.configLabel;
  const url = config[key];
  label.textContent = url ? url.replace(/^https?:\/\//, '') : key;
});
