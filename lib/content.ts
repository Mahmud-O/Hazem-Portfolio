export type Language = 'ar' | 'en'

export const content = {
  ar: {
    meta: {
      title: 'حازم | مونتير فيديو وموشن جرافيك',
      description:
        'مونتير فيديو وموشن جرافيك يساعد البراندات والشركات وصناع المحتوى على تحويل أفكارهم إلى فيديوهات تحقق مشاهدة وتفاعل ونتائج.',
    },
    brand: 'حازم',
    navigation: [
      { label: 'الأعمال', href: '#work' },
      { label: 'الخدمات', href: '#services' },
      { label: 'عنّي', href: '#about' },
      { label: 'تواصل', href: '#contact' },
    ],
    actions: {
      hire: 'خلّنا نبدأ',
      arabic: 'عربي',
      english: 'EN',
      menu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
    },
    imagePrompts: {
      hero: 'Cinematic editorial portrait of the same Gulf Arab man from the reference image person.jpeg, preserve facial structure, skin tone, hair, and beard accurately, no beautification, confident expression, casual-smart outfit, premium video editing studio with monitor glow in the background, controlled emerald practical light, dark cinematic palette, vertical 4:5 composition with clear negative space on the left for Arabic copy, photorealistic, high detail, no text, no logo.',
    },
    plannedSections: {
      hero: {
        eyebrow: 'مونتاج فيديو وموشن جرافيك للبراندات وصنّاع المحتوى',
        title: 'فيديوهات توقّف السكرول، وتخلّي جمهورك يتفاعل مع براندك',
        description:
          'أحوّل لقطاتك الخام إلى فيديوهات بإيقاع سريع وقصة واضحة، تشدّ المشاهد من أول ثانيتين وتوصّل رسالتك بدون ملل.',
        whatsapp: 'تواصل عبر واتساب',
      },
      trust: {
        eyebrow: 'شراكة مستمرة في صناعة المحتوى',
        partner: 'نجم الكورة — @Negm_Elkora',
        partnerUrl: 'https://www.youtube.com/@Negm_Elkora',
        partnerDescription:
          'شراكة مستمرة لإنتاج وتحرير محتوى رياضي ليوتيوب، مع تجهيز نسخ مناسبة لإنستجرام وفيسبوك وتيك توك.',
        platforms: [
          { name: 'YouTube', url: 'https://www.youtube.com/@Negm_Elkora' },
          { name: 'Instagram', url: 'https://instagram.com/negm.elkora' },
          { name: 'Facebook', url: 'https://facebook.com/Negm.Elkoraa' },
          { name: 'TikTok', url: 'https://tiktok.com/@negm.elkora' },
        ], 
        stats: [
          { value: '26K', label: 'مشترك على YouTube' },
          { value: '583', label: 'فيديو منشور على القناة' },
        ],
      },
      problemSolution: {
        eyebrow: 'من المشكلة إلى الفرصة',
        problem:
          'محتوى جيد لكن مونتاجه ضعيف: بداية بطيئة، إيقاع مملّ، وجمهور يترك الفيديو قبل ما توصل رسالتك. النتيجة وقت وميزانية ضايعين وتفاعل أقل من المتوقع.',
        solution:
          'أبني الفيديو حول هدفك: هوك قوي في البداية، إيقاع مضبوط، ترجمة وموشن يخدمون الفكرة، ونهاية فيها دعوة واضحة لاتخاذ الإجراء، عشان كل ثانية تشتغل لصالحك.',
      },
      services: [
        {
          title: 'Reels وShorts',
          benefit: 'مقاطع قصيرة بإيقاع سريع وهوك قوي، تزيد المشاهدة والمشاركة على إنستجرام وتيك توك وسناب.',
        },
        {
          title: 'Ads',
          benefit: 'إعلانات فيديو مركّزة على الرسالة والعرض، تساعدك توصل للعميل المناسب وتشجّعه ياخذ خطوة الشراء.',
        },
        {
          title: 'YouTube',
          benefit: 'مونتاج فيديوهات يوتيوب بتسلسل واضح وإيقاع يحافظ على انتباه المشاهد لين آخر الفيديو.',
        },
        {
          title: 'Motion Graphics',
          benefit: 'عناصر متحركة وشعارات وانتقالات تعطي فيديوهاتك هوية احترافية وتشرح الأفكار بشكل أبسط.',
        },
        {
          title: 'فيديوهات منتجات',
          benefit: 'عرض منتجك بشكل جذّاب يبرز مميزاته ويخلّي العميل يشوف قيمته من أول نظرة.',
        },
      ],
      caseStudies: [
        {
          title: 'حسام حسن هيرحل من تدريب منتخب مصر؟',
          client: 'نجم الكورة',
          series: 'YouTube · 612 views ظاهرة على القناة',
          format: '16:9',
          stats: [
            { label: 'المشاهدات', value: '612' },
            { label: 'المنصة', value: 'YouTube' },
            { label: 'الصيغة', value: '16:9' },
          ],
          media: { type: 'iframe', src: 'https://www.youtube.com/embed/g9PuICBlUwA' },
        },
        {
          title: 'ماذا فعل مورينيو بعد الاخطاء التحكيميه ضد ريال مدريد😱‼',
          client: 'نجم الكورة',
          series: 'YouTube · 286 views ظاهرة على القناة',
          format: '16:9',
          stats: [
            { label: 'المشاهدات', value: '286' },
            { label: 'المنصة', value: 'YouTube' },
            { label: 'الصيغة', value: '16:9' },
          ],
          media: { type: 'iframe', src: 'https://www.youtube.com/embed/Y8YYt5nwewg' },
        },
        {
          title: 'استبعاد مصطفى محمد ومحمد شحاته من قائمة منتخب مصر😱‼',
          client: 'نجم الكورة',
          series: 'YouTube · 598 views ظاهرة على القناة',
          format: '16:9',
          stats: [
            { label: 'المشاهدات', value: '598' },
            { label: 'المنصة', value: 'YouTube' },
            { label: 'الصيغة', value: '16:9' },
          ],
          media: { type: 'iframe', src: 'https://www.youtube.com/embed/hHOr-JkTMBg' },
        },
        {
          title: 'الأهلي يفوز على أبو قير للأسمدة بأداء غير مقنع',
          client: 'نجم الكورة',
          series: 'YouTube · 176 views ظاهرة على القناة',
          format: '16:9',
          stats: [
            { label: 'المشاهدات', value: '176' },
            { label: 'المنصة', value: 'YouTube' },
            { label: 'الصيغة', value: '16:9' },
          ],
          media: { type: 'iframe', src: 'https://www.youtube.com/embed/TAdM8qx-L3g' },
        },
        {
          title: 'اللقطه دي تبينلك ان حمزه عبد الكريم مغرور😱‼',
          client: 'نجم الكورة',
          series: 'YouTube Shorts · 149 مشاهدة ظاهرة على القناة',
          format: '9:16',
          stats: [
            { label: 'المشاهدات', value: '149' },
            { label: 'المنصة', value: 'YouTube Shorts' },
            { label: 'الصيغة', value: '9:16' },
          ],
          media: { type: 'iframe', src: 'https://www.youtube.com/embed/kheYNerRIWo' },
        },
        {
          title: 'ازاي لامين يامال خدع زميله في برشلونة',
          client: 'نجم الكورة',
          series: 'YouTube Shorts · 18K مشاهدة ظاهرة على القناة',
          format: '9:16',
          stats: [
            { label: 'المشاهدات', value: '18K' },
            { label: 'المنصة', value: 'YouTube Shorts' },
            { label: 'الصيغة', value: '9:16' },
          ],
          media: { type: 'iframe', src: 'https://www.youtube.com/embed/9RX3AXcmbLc' },
        },
        {
          title: 'ازاي منتخب جنوب السودان كان السبب في تألق حمزه عبد الكريم',
          client: 'نجم الكورة',
          series: 'YouTube Shorts · 37K مشاهدة ظاهرة على القناة',
          format: '9:16',
          stats: [
            { label: 'المشاهدات', value: '37K' },
            { label: 'المنصة', value: 'YouTube Shorts' },
            { label: 'الصيغة', value: '9:16' },
          ],
          media: { type: 'iframe', src: 'https://www.youtube.com/embed/P8sCU2uEBPw' },
        },
        {
          title: 'سبب عودة مرموش بعد غيابه 139 يوم',
          client: 'نجم الكورة',
          series: 'YouTube Shorts · 14K مشاهدة ظاهرة على القناة',
          format: '9:16',
          stats: [
            { label: 'المشاهدات', value: '14K' },
            { label: 'المنصة', value: 'YouTube Shorts' },
            { label: 'الصيغة', value: '9:16' },
          ],
          media: { type: 'iframe', src: 'https://www.youtube.com/embed/FuDCrvl3WPU' },
        },
      ],
      process: {
        steps: [
          'نتواصل ونفهم هدفك وجمهورك والمنصة المطلوبة',
          'نتفق على الأسلوب والمراجع وخطة العمل',
          'أبدأ المونتاج وأرسل لك نسخة أولية للمراجعة',
          'أطبّق ملاحظاتك وأعدّل لين ترضى عن النتيجة',
          'أسلّمك الملفات النهائية بالصيغ والمقاسات المناسبة لكل منصة',
        ],
        delivery: 'مدة التسليم تتحدد حسب حجم المشروع، وغالباً من 3 إلى 5 أيام عمل للفيديو القصير، ونتفق عليها قبل البدء.',
      },
      packages: [
        {
          name: 'الأساسية',
          fit: 'للبدايات وللحسابات اللي تبغى محتوى منتظم بميزانية مناسبة',
          includes: 'مونتاج فيديو قصير، ألوان وصوت أساسي، ترجمة، وجولة تعديلات',
          price: 'تواصل لمعرفة السعر',
        },
        {
          name: 'الاحترافية',
          fit: 'للبراندات وصنّاع المحتوى اللي يبغون مستوى أعلى من التفاصيل والتأثيرات',
          includes: 'مونتاج متقدم، موشن جرافيك، تلوين، تصميم صوتي، وجولات تعديل أكثر',
          price: 'تواصل لمعرفة السعر',
        },
        {
          name: 'مخصصة',
          fit: 'للمشاريع الكبيرة أو الحملات اللي تحتاج شغل مستمر',
          includes: 'نحدد النطاق مع بعض حسب احتياجك: عدد الفيديوهات، المنصات، والجدول الزمني',
          price: 'عرض سعر حسب المشروع',
        },
      ],
      testimonials: [
        {
          quote: 'تجربة ممتازة من البداية للنهاية؛ فهم سريع للفكرة، مونتاج جذاب، ونسخ جاهزة للنشر على مختلف المنصات.',
          name: 'نجم الكورة',
          role: 'شراكة محتوى رياضي',
        },
      ],
      about: {
        story:
          'أنا حازم، مونتير فيديو وموشن جرافيك. أشتغل مع صنّاع محتوى وبراندات على الريلز والإعلانات وفيديوهات المنتجات. أركّز على إيقاع سريع، قصة واضحة، ورسالة توصل من أول ثانيتين. أحب أفهم هدفك قبل ما أبدأ، عشان الفيديو يخدم نتيجتك مو بس يطلع حلو.',
        tools: ['CapCut','Canva'],
      },
      faq: [
        {
          question: 'وش اللي أحتاج أرسله لك عشان نبدأ؟',
          answer: 'اللقطات الخام، وأي مراجع أو أمثلة تعجبك، وهوية البراند (شعار وألوان وخطوط) لو موجودة، ونبذة عن هدف الفيديو.',
        },
        {
          question: 'كم جولة تعديل تشمل؟',
          answer: 'تختلف حسب الباقة، ونتفق على عدد الجولات قبل البدء عشان يكون كل شيء واضح.',
        },
        {
          question: 'كم تاخذ مدة التسليم؟',
          answer: 'تعتمد على طول الفيديو وتعقيده وعدد الفيديوهات. أعطيك مدة محددة بعد ما أشوف تفاصيل مشروعك.',
        },
        {
          question: 'هل تشتغل مع عملاء عن بُعد؟',
          answer: 'نعم، الشغل كله عن بُعد، والتواصل وتبادل الملفات يتم عبر واتساب أو الإيميل بدون أي تعقيد.',
        },
        {
          question: 'كيف أعرف السعر المناسب لمشروعي؟',
          answer: 'ابعث لي تفاصيل مشروعك على واتساب، وأرسل لك عرض سعر واضح يناسب احتياجك وميزانيتك.',
        },
      ],
      contact: {
        title: 'جاهز تحوّل فكرتك لفيديو يحقق نتيجة؟ كلّمني وخلّنا نبدأ.',
        whatsapp: '+201093816029',
        instagram: 'https://instagram.com/negm.elkora',
        email: 'mahmoud4h5@gmail.com',
      },
    },
  },
  en: {
    meta: {
      title: 'Hazem | Video Editor & Motion Designer',
      description:
        'Video editing and motion design for Gulf brands, companies, and creators who want stronger views, engagement, and results.',
    },
    brand: 'Hazem',
    navigation: [
      { label: 'Work', href: '#work' },
      { label: 'Services', href: '#services' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
    actions: {
      hire: 'Let’s work together',
      arabic: 'عربي',
      english: 'EN',
      menu: 'Open menu',
      closeMenu: 'Close menu',
    },
    imagePrompts: {
      hero: 'Cinematic editorial portrait of the same Gulf Arab man from the reference image person.jpeg, preserve facial structure, skin tone, hair, and beard accurately, no beautification, confident expression, casual-smart outfit, premium video editing studio with monitor glow in the background, controlled emerald practical light, dark cinematic palette, vertical 4:5 composition with clear negative space on the left for Arabic copy, photorealistic, high detail, no text, no logo.',
    },
    plannedSections: {
      hero: {
        eyebrow: 'Video editing & motion design for brands and creators',
        title: 'Videos that stop the scroll and get your audience engaged',
        description:
          'I turn your raw footage into fast-paced videos with a clear story that hook viewers in the first two seconds and deliver your message without the fluff.',
        whatsapp: 'Talk on WhatsApp',
      },
      trust: {
        eyebrow: 'An ongoing content partnership',
        partner: 'Negm El Kora — @Negm_Elkora',
        partnerUrl: 'https://www.youtube.com/@Negm_Elkora',
        partnerDescription:
          'An ongoing partnership producing and editing sports content for YouTube, with versions prepared for Instagram, Facebook, and TikTok.',
        platforms: [
          { name: 'YouTube', url: 'https://www.youtube.com/@Negm_Elkora' },
          { name: 'Instagram', url: '[Add Instagram link here]' },
          { name: 'Facebook', url: '[Add Facebook link here]' },
          { name: 'TikTok', url: '[Add TikTok link here]' },
        ],
        stats: [
          { value: '26K', label: 'YouTube subscribers' },
          { value: '583', label: 'Videos published on the channel' },
          { value: 'Ongoing', label: 'Editing partnership' },
        ],
      },
      problemSolution: {
        eyebrow: 'From problem to opportunity',
        problem:
          'Good content with weak editing: a slow start, a dull pace, and viewers who leave before your message lands. The result is wasted time and budget, and lower engagement than you hoped for.',
        solution:
          'I build each video around your goal: a strong hook, tight pacing, captions and motion that support the idea, and a clear call to action at the end, so every second works for you.',
      },
      services: [
        {
          title: 'Reels & Shorts',
          benefit: 'Short, fast-paced clips with strong hooks that boost views and shares on Instagram, TikTok, and Snapchat.',
        },
        {
          title: 'Ads',
          benefit: 'Video ads focused on your message and offer, helping you reach the right customer and push them to act.',
        },
        {
          title: 'YouTube',
          benefit: 'YouTube editing with clear structure and pacing that keeps viewers watching until the end.',
        },
        {
          title: 'Motion Graphics',
          benefit: 'Animated elements, logos, and transitions that give your videos a professional identity and explain ideas simply.',
        },
        {
          title: 'Product Videos',
          benefit: 'Showcase your product attractively, highlight its strengths, and help customers see its value at a glance.',
        },
      ],
      caseStudies: [
        {
          title: 'What happened after the refereeing mistakes against Real Madrid?',
          client: 'Negm El Kora',
          series: 'YouTube · 286 views shown on the channel',
          format: '16:9',
          stats: [
            { label: 'Views', value: '286' },
            { label: 'Platform', value: 'YouTube' },
            { label: 'Format', value: '16:9' },
          ],
          media: {
            type: 'iframe',
            src: 'https://www.youtube.com/embed/Y8YYt5nwewg',
            },
        },
      ],
      process: {
        steps: [
          'We talk and I learn your goal, audience, and target platform',
          'We agree on the style, references, and work plan',
          'I edit and send you a first cut for review',
          'I apply your feedback and refine until you are happy',
          'I deliver final files in the right formats and sizes for each platform',
        ],
        delivery: 'Delivery time depends on project size, usually 3–5 business days for a short video, and we agree on it before we start.',
      },
      packages: [
        {
          name: 'Basic',
          fit: 'For getting started, or accounts that want regular content on a sensible budget',
          includes: 'Short video edit, basic color and sound, captions, and one revision round',
          price: 'Contact for pricing',
        },
        {
          name: 'Professional',
          fit: 'For brands and creators who want more detail and polish in effects',
          includes: 'Advanced editing, motion graphics, color grading, sound design, and more revision rounds',
          price: 'Contact for pricing',
        },
        {
          name: 'Custom',
          fit: 'For larger projects or campaigns that need ongoing work',
          includes: 'We define the scope together: number of videos, platforms, and timeline',
          price: 'Custom quote per project',
        },
      ],
      testimonials: [
        {
          quote: 'A reliable partnership creating sports videos for YouTube and short-form edits tailored for each social platform.',
          name: 'Negm El Kora',
          role: 'Sports content partnership',
        },
      ],
      about: {
        story:
          'I’m Hazem, a video editor and motion designer. I work with creators and brands on reels, ads, and product videos. I focus on fast pacing, a clear story, and a message that lands in the first two seconds. I like to understand your goal before I start, so the video serves your results and not just looks good.',
        tools: ['CapCut','Canva'],
      },
      faq: [
        {
          question: 'What do I need to send you to get started?',
          answer: 'Your raw footage, any references you like, your brand identity (logo, colors, fonts) if you have it, and a short note on the goal of the video.',
        },
        {
          question: 'How many revision rounds are included?',
          answer: 'It depends on the package, and we agree on the number of rounds before starting so everything is clear.',
        },
        {
          question: 'How long does delivery take?',
          answer: 'It depends on video length, complexity, and how many videos you need. I give you a specific timeline once I see your project details.',
        },
        {
          question: 'Do you work remotely with clients in the Gulf?',
          answer: 'Yes, all work is remote, and communication and file sharing happen over WhatsApp or email with no hassle.',
        },
        {
          question: 'How do I know the right price for my project?',
          answer: 'Send me your project details on WhatsApp and I will reply with a clear quote that fits your needs and budget.',
        },
      ],
      contact: {
        title: 'Ready to turn your idea into a video that delivers? Message me and let’s start.',
        whatsapp: '+201093816029',
        instagram: 'https://instagram.com/negm.elkora',
        email: 'mahmoud4h5@gmail.com',
      },
    },
  },
} as const

export type SiteContent = (typeof content)[Language]