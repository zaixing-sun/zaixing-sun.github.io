class BibtexModal {
  constructor() {
    this.modal = null;
    this.bibContent = null;
    this.isInitialized = false;
    this.init();
  }
  
  init() {
    try {
      // 检查必要的依赖
      if (typeof bibDatabase === 'undefined') {
        console.error('bibDatabase is not defined. Make sure bibtex-data.js is loaded first.');
        return;
      }
      
      this.createModal();
      this.bindEvents();
      this.isInitialized = true;
      
      console.log('BibTeX modal initialized successfully');
      console.log('Available papers:', Object.keys(bibDatabase));
      
    } catch (error) {
      console.error('Failed to initialize BibTeX modal:', error);
    }
  }
  
  createModal() {
    // 检查是否已经存在模态框
    if (document.getElementById('bib-modal')) {
      console.log('Modal already exists, reusing it.');
      this.modal = document.getElementById('bib-modal');
      this.bibContent = document.getElementById('bib-content');
      return;
    }
    
    const modalHTML = `
      <div id="bib-modal" class="bib-modal">
        <div class="bib-modal-content">
          <div class="bib-modal-header">
            <h3>BibTeX Reference</h3>
            <span class="bib-close">&times;</span>
          </div>
          <pre id="bib-content">Select a paper to view its BibTeX entry.</pre>
          <div class="bib-buttons">
            <button class="copy-bib-btn">Copy to Clipboard</button>
            <button class="close-bib-btn">Close</button>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.modal = document.getElementById('bib-modal');
    this.bibContent = document.getElementById('bib-content');
    
    console.log('Modal created:', this.modal);
    console.log('Close button:', document.querySelector('.bib-close'));
  }
  
  bindEvents() {
    // 为所有bib链接添加点击事件
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('bib-link')) {
        e.preventDefault();
        this.showBibtex(e.target.dataset.paper);
      }
    });
    
    // 关闭按钮事件
    const closeBtn = document.querySelector('.bib-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.hideModal();
      });
      console.log('Close button event bound');
    } else {
      console.error('Close button not found!');
    }
    
    // 关闭按钮事件
    const closeModalBtn = document.querySelector('.close-bib-btn');
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        this.hideModal();
      });
    }
    
    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.hideModal();
      }
    });
    
    // 复制到剪贴板功能
    const copyBtn = document.querySelector('.copy-bib-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        this.copyToClipboard();
      });
    }
    
    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.style.display === 'block') {
        this.hideModal();
      }
    });
  }
  
  showBibtex(paperId) {
    if (!this.isInitialized) {
      console.error('BibTeX modal not initialized');
      return;
    }
    
    console.log('Searching for paper:', paperId);
    console.log('Available papers:', Object.keys(bibDatabase));
    
    if (bibDatabase && bibDatabase[paperId]) {
      this.bibContent.textContent = bibDatabase[paperId];
      this.modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      
      // 确保模态框在视图中
      this.modal.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      const availablePapers = bibDatabase ? Object.keys(bibDatabase) : 'none';
      console.error(`Paper "${paperId}" not found. Available:`, availablePapers);
      
      // 更友好的错误信息
      this.bibContent.textContent = `// BibTeX entry not found for: ${paperId}\n// Available papers: ${availablePapers.join(', ')}`;
      this.modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  }
  
  hideModal() {
    if (this.modal) {
      this.modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }
  
  copyToClipboard() {
    if (!navigator.clipboard) {
      this.fallbackCopyToClipboard();
      return;
    }
    
    navigator.clipboard.writeText(this.bibContent.textContent)
      .then(() => {
        const copyBtn = document.querySelector('.copy-bib-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = originalText;
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        this.fallbackCopyToClipboard();
      });
  }
  
  fallbackCopyToClipboard() {
    const textArea = document.createElement('textarea');
    textArea.value = this.bibContent.textContent;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      document.execCommand('copy');
      const copyBtn = document.querySelector('.copy-bib-btn');
      const originalText = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 2000);
    } catch (err) {
      console.error('Fallback copy failed: ', err);
      alert('Failed to copy to clipboard');
    }
    
    document.body.removeChild(textArea);
  }
}

// 当DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  new BibtexModal();
});