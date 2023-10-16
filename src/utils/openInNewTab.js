// src/utils.js
const openInNewTab = (url) => {
    if (typeof window !== 'undefined') {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }
};

const openInSameTab = (url) => {
    if (typeof window !== 'undefined') {
        window.location.href = url;
      }
};


export { openInNewTab, openInSameTab };
