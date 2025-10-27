// BibTeX 模态框功能
class BibtexModal {
  constructor() {
    this.modal = null;
    this.bibContent = null;
    this.init();
  }
  
  init() {
    // 创建模态框元素
    this.createModal();
    // 绑定事件
    this.bindEvents();
  }
  
  createModal() {
    // 创建模态框HTML结构
    const modalHTML = `
      <div id="bib-modal" class="bib-modal">
        <div class="bib-modal-content">
          <span class="bib-close">&times;</span>
          <h3>BibTeX Reference</h3>
          <pre id="bib-content"></pre>
          <div class="bib-buttons">
            <button class="copy-bib-btn">Copy to Clipboard</button>
            <button class="close-bib-btn">Close</button>
          </div>
        </div>
      </div>
    `;
    
    // 添加到页面
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // 获取元素引用
    this.modal = document.getElementById('bib-modal');
    this.bibContent = document.getElementById('bib-content');
  }
  
  bindEvents() {
    // 为所有bib链接添加点击事件（事件委托）
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('bib-link')) {
        e.preventDefault();
        this.showBibtex(e.target.dataset.paper);
      }
    });
    
    // 关闭按钮事件
    document.querySelector('.bib-close').addEventListener('click', () => {
      this.hideModal();
    });
    
    document.querySelector('.close-bib-btn').addEventListener('click', () => {
      this.hideModal();
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.hideModal();
      }
    });
    
    // 复制到剪贴板功能
    document.querySelector('.copy-bib-btn').addEventListener('click', () => {
      this.copyToClipboard();
    });
    
    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.style.display === 'block') {
        this.hideModal();
      }
    });
  }
  
  showBibtex(paperId) {
    if (bibDatabase[paperId]) {
      this.bibContent.textContent = bibDatabase[paperId];
      this.modal.style.display = 'block';
      // 防止背景滚动
      document.body.style.overflow = 'hidden';
    } else {
      console.warn(`BibTeX entry not found for: ${paperId}`);
      alert('BibTeX entry not found for this paper.');
    }
  }
  
  hideModal() {
    this.modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  copyToClipboard() {
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
        // 降级方案
        this.fallbackCopyToClipboard();
      });
  }
  
  fallbackCopyToClipboard() {
    const textArea = document.createElement('textarea');
    textArea.value = this.bibContent.textContent;
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