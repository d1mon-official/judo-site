const translations = {
    uk: {
        nav_home: "Головна", nav_about: "Про клуб", nav_schedule: "Розклад", nav_contact: "Контакти",
        hero_title: "JUDO CENTER", btn_join: "Приєднатися",
        about_title: "Про наш Центр",
        about_p: "Центр дзюдо був заснований у 1996 році. За останні 20 років наші учні брали участь у численних регіональних, національних та міжнародних змаганнях. Багато з них стали чемпіонами США та переможцями міжконтинентальних турнірів. Троє наших вихованців були відібрані до збірної США для участі в Панамериканських змаганнях. Сьогодні в клубі активно тренуються 150 учнів віком від 5 до 65 років. Головний тренер клубу — Фелікс Свердлін, має чорний пояс (5 дан). Дзюдо — це не просто спорт, це стиль життя. Наші учні стають частиною великої Дзюдо-родини!",
        sched_title: "Розклад занять", loc_si: "Стейтен-Айленд", loc_br: "Бруклін",
        footer_title: "Приєднуйтесь до нашої родини",
        footer_text: "Почніть свій шлях сьогодні з професійними тренерами.",
        form_name_placeholder: "Ваше ім'я", form_phone_placeholder: "Номер телефону",
        form_select_gym: "Оберіть зал", btn_signup: "Записатися",
        profile_birth: "Рік народження:", profile_since: "Займається з:", profile_belt: "Пояс:", profile_bio_title: "Біографія", profile_back: "← Назад до команди"
    },
    en: {
        nav_home: "Home", nav_about: "About", nav_schedule: "Schedule", nav_contact: "Contact",
        hero_title: "JUDO CENTER", btn_join: "Join Us",
        about_title: "About our Center",
        about_p: "Judo Center was founded in 1996. Over the last 20 years, our students have participated in numerous competitions. Many have become US champions. Today, 150 students train in the club. Head coach — Felix Sverdlin (5th dan). Judo is not just a sport, it's a lifestyle. Our students become part of a big Judo family!",
        sched_title: "Class Schedule", loc_si: "Staten Island", loc_br: "Brooklyn",
        footer_title: "Join Our Family",
        footer_text: "Start your journey today with professional coaches.",
        form_name_placeholder: "Your Name", form_phone_placeholder: "Phone Number",
        form_select_gym: "Select Gym", btn_signup: "Sign Up",
        profile_birth: "Birth Year:", profile_since: "Training since:", profile_belt: "Belt:", profile_bio_title: "Biography", profile_back: "← Back to Team"
    },
    ru: {
        nav_home: "Главная", nav_about: "О клубе", nav_schedule: "Расписание", nav_contact: "Контакты",
        hero_title: "JUDO CENTER", btn_join: "Присоединиться",
        about_title: "О нашем Центре",
        about_p: "Центр дзюдо был основан в 1996 году. За последние 20 лет наши ученики участвовали в многочисленных соревнованиях. Многие стали чемпионами США. Сегодня в клубе тренируются 150 учеников. Главный тренер — Феликс Свердлин (5 дан). Дзюдо — это стиль жизни. Наши ученики становятся частью большой Дзюдо-семьи!",
        sched_title: "Расписание занятий", loc_si: "Стейтен-Айленд", loc_br: "Бруклин",
        footer_title: "Присоединяйтесь к нашей семье",
        footer_text: "Начните свой путь сегодня с профессиональными тренерами.",
        form_name_placeholder: "Ваше имя", form_phone_placeholder: "Номер телефона",
        form_select_gym: "Выберите зал", btn_signup: "Записаться",
        profile_birth: "Год рождения:", profile_since: "Занимается с:", profile_belt: "Пояс:", profile_bio_title: "Биография", profile_back: "← Назад к команде"
    }
};

const athletes = {
    oleg: {
        name: "Oleg", birth: "2009", since: "2018", belt: "Brown Belt",
        bio: "Олег — амбітний спортсмен. Спеціалізується на техніці кидків через стегно. Багаторазовий призер міських змагань.",
        insta: "https://instagram.com/oleg_judo", img: "https://i.postimg.cc/pdc2T9YY/7879-jpg.webp"
    },
    dmytro: {
        name: "Dmytro", birth: "2008", since: "2016", belt: "Black Belt",
        bio: "Дмитро займається дзюдо більше 8 років. Його витримка допомагає перемагати сильніших суперників.",
        insta: "https://instagram.com/dmytro_judo", img: "https://i.postimg.cc/2jb51xt6/43214-jpg.webp"
    },
    marta: {
        name: "Marta", birth: "2010", since: "2020", belt: "Blue Belt",
        bio: "Марта показує чудові результати завдяки своїй швидкості та техніці в партері.",
        insta: "https://instagram.com/marta_judo", img: "https://i.postimg.cc/rwL2F1Bn/14-jpg.webp"
    }
};

function openProfile(id) {
    const p = athletes[id];
    if (!p) return;
    document.querySelector(".people-grid").style.display = "none";
    document.querySelector(".section-title").style.display = "none"; // Ховаємо заголовок "Our Team"
    const profileDiv = document.getElementById("profile");
    profileDiv.classList.remove("hidden");

    document.getElementById("p_name").innerText = p.name;
    document.getElementById("p_birth").innerText = p.birth;
    document.getElementById("p_year").innerText = p.since;
    document.getElementById("p_belt").innerText = p.belt;
    document.getElementById("p_bio").innerText = p.bio;
    document.getElementById("p_image").src = p.img;
    document.getElementById("p_insta").href = p.insta;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeProfile() {
    document.querySelector(".people-grid").style.display = "grid";
    document.querySelector(".section-title").style.display = "block";
    document.getElementById("profile").classList.add("hidden");
}

function changeLang(lang, btn) {
    if (btn) {
        document.querySelectorAll('.lang-node').forEach(node => node.classList.remove('active'));
        btn.classList.add('active');
    }

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
                el.placeholder = translations[lang][key];
                if (el.tagName === 'SELECT') el.options[0].text = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });
}

// Запуск мови при завантаженні
document.addEventListener("DOMContentLoaded", () => {
    changeLang('en'); 
});
