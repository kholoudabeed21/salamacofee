// ملف جافا سكريبت لفلترة القائمة

// انتظر حتى تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. الحصول على أزرار الفلترة
    const filterButtons = document.querySelectorAll('.b');
    
    // 2. الحصول على عناصر القائمة
    const menuItems = document.querySelectorAll('.it');
    
    // 3. إضافة حدث لكل زر
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            // 4. إزالة الكلاس النشط من جميع الأزرار
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // 5. إضافة الكلاس النشط للزر المختار
            this.classList.add('active');
            
            // 6. الحصول على الفئة المحددة
            const category = this.getAttribute('data-category');
            
            // 7. عرض العناصر حسب الفئة
            menuItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (category === 'all') {
                    // عرض جميع العناصر
                    item.style.display = 'flex';
                } else if (itemCategory === category) {
                    // عرض العناصر التي تنتمي لنفس الفئة
                    item.style.display = 'flex';
                } else {
                    // إخفاء العناصر الأخرى
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // 8. تفعيل الزر "All" تلقائياً عند التحميل
    const allButton = document.querySelector('.b[data-category="all"]');
    if (allButton) {
        allButton.classList.add('active');
    }
});