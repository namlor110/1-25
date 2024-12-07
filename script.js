const questions = [
    {
        question: "Câu 1: Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến vào thời điểm nào?",
        options: ["Đêm ngày 18-9-1946", "Đêm ngày 19-12-1946", "Ngày 20-12-1946", "Ngày 2-9-1945"],
        answer: 1 // Đêm ngày 19-12-1946
    },
    {
        question: "Câu 2: Quân đội Đồng minh nào dưới danh nghĩa giải giáp quân Nhật kéo vào Việt Nam từ vĩ tuyến 16 trở ra Bắc?",
        options: ["Pháp", "Anh", "Trung Hoa Dân Quốc", "Mĩ"],
        answer: 2 // Trung Hoa Dân Quốc
    },
    {
        question: "Câu 3: Hội nghị Ban thường vụ Trung Đảng họp mở rộng quyết định phát động cuộc kháng chiến toàn quốc họp vào thời gian nào?",
        options: ["Ngày 18-12-1946", "Ngày 19-12-1946", "Ngày 20-12-1946", "Ngày 22-12-1946"],
        answer: 1 // Ngày 19-12-1946
    },
    {
        question: "Câu 4: Quân đội Đồng minh nào dưới đây dưới danh nghĩa giải giáp quân Nhật kéo vào nước Việt Nam từ vĩ tuyến 16 trở vào Nam?",
        options: ["Pháp", "Anh", "Trung Hoa Dân Quốc", "Mĩ"],
        answer: 1 // Pháp
    },
    {
        question: "Câu 5: Cuộc tổng giao chiến lịch sử mở đầu của kháng chiến chống thực dân Pháp của quân và dân ta ở Hà Nội đã diễn ra trong...?",
        options: ["60 ngày đêm", "30 ngày đêm", "12 ngày đêm", "90 ngày đêm"],
        answer: 0 // 60 ngày đêm
    },
    {
        question: "Câu 6: Sau Cách mạng tháng Tám năm 1945, ngân sách nhà nước trống rỗng, kho bạc của nhà nước Việt Nam còn khoảng...",
        options: ["hơn 3,1 triệu đồng", "hơn 1,2 triệu đồng", "hơn 2,1 triệu đồng", "hơn 2,2 triệu đồng"],
        answer: 1 // hơn 1,2 triệu đồng
    },
    {
        question: "Câu 7: Những văn kiện nào dưới đây được coi như Cương lĩnh kháng chiến của Đảng ta:",
        options: ["Lời kêu gọi toàn quốc kháng chiến của chủ tịch Hồ Chí Minh", "Chỉ thị toàn dân kháng chiến của Trung ương Đảng", "Tác phẩm 'Kháng chiến nhất định thắng lợi' của Tổng Bí thư Trường Chinh", "Cả A, B, C"],
        answer: 3 // Cả A, B, C
    },
    {
        question: "Câu 8: Sau cách mạng tháng Tám năm 1945, khó khăn lớn nhất đưa nước Việt Nam vào tình thế “ngàn cân treo sợi tóc” là gì?",
        options: ["Khó khăn về thù trong, giặc ngoài", "Hơn 90% dân số không biết chữ", "Ngân sách nhà nước trống rỗng, tài chính nước Việt Nam rối loạn", "Nạn đói, nạn dốt đe dọa nghiêm trọng đến nhân dân Việt Nam"],
        answer: 0 // Khó khăn về thù trong, giặc ngoài
    },
    {
        question: "Câu 9: Nhiệm vụ hàng đầu của nhân dân ta trong quá trình kháng chiến chống thực dân Pháp:",
        options: ["Chống đế quốc giành độc lập dân tộc", "Xoá bỏ những tàn tích phong kiến đem lại ruộng đất cho nông dân", "Xây dựng chế độ dân chủ mới", "Cả ba phương án trên"],
        answer: 0
    },
    {
        question: "Câu 10: Sau Cách mạng tháng Tám năm 1945, tàn dư văn hóa lạc hậu của chế độ thực dân, phong kiến để lại hết sức nặng nề...",
        options: ["hơn 60% dân số không biết chữ", "hơn 90% dân số không biết chữ", "hơn 70% dân số không biết chữ", "hơn 80% dân số không biết chữ"],
        answer: 1 // hơn 90% dân số không biết chữ
    },
    {
        question: "Câu 11: Đầu năm 1948, TW Đảng đã đề ra cách thức thực hiện cách mạng ruộng đất theo đường lối riêng biệt của cách mạng Việt Nam, đó là:",
        options: ["Cải cách ruộng đất", "Cải cách từng bước để dần dần thu hẹp phạm vi bóc lột của địa chủ", "Sửa đổi chế độ ruộng đất trong phạm vi không có hại cho nông dân.", "Cả A, B và C"],
        answer: 3 // Cả A, B và C
    },
    {
        question: "Câu 12: Cuộc tổng tuyển cử đầu tiên bầu Quốc hội 1 nước Việt Nam Dân chủ Cộng hòa diễn ra vào thời gian nào?",
        options: ["Ngày 6/1/1945", "Ngày 6/1/1946", "Ngày 6/1/1947", "Ngày 6/1/1948"],
        answer: 1 // Ngày 6/1/1946
    },
    {
        question: "Câu 13: Trong Hiệp định Sơ bộ ngày 6/3/1946, Chính phủ Pháp công nhận nước Việt Nam Dân chủ Cộng hòa là một quốc gia...",
        options: ["tự do", "độc lập", "tự trị", "độc lập và tự do"],
        answer: 0 
    },
    {
        question: "Câu 14: Theo hội nghị Pốtđam, quân Trung Hoa Dân Quốc vào Việt Nam để...",
        options: ["giải giáp quân đội Nhật", "giúp Việt Nam đánh đuổi thực dân Pháp", "giúp đỡ chính quyền cách mạng Việt Nam", "giúp Việt Nam đuổi quân Anh"],
        answer: 0 // giải giáp quân đội Nhật
    },
    {
        question: "Câu 15: Ban Thường vụ TƯ Đảng đã ra chỉ thị phát động phong trào thi đua ái quốc vào thời gian nào?",
        options: ["27/3/1946", "28/3/1946", "27/3/1948", "28/4/1949"],
        answer: 2 
    },
    {
        question: "Câu 16: Trong thời kỳ kháng chiến chống Pháp, khẩu hiệu 'Tích cực cầm cự và chuẩn bị tổng phản công' được nêu ra khi nào?",
        options: ["1948", "1949", "1950", "1951"],
        answer: 1
    },
    {
        question: "Câu 17: Trong kháng chiến chống Pháp, Đảng đã chủ trương mở rộng khối đại đoàn kết dân tộc với việc",
        options: ["Thống nhất Việt Minh và Liên Việt", "Thành lập Mặt trận Liên Việt", "Mở rộng Mặt trận Việt Minh", "Thành lập Mặt trận Việt Minh"],
        answer: 0
    },
    {
        question: "Câu 18: Đại hội thống nhất Mặt trận Việt Minh và Liên Việt được tổ chức vào thời gian nào?",
        options: ["3/1951", "2/1952", "3/1953", "1/1953"],
        answer: 0 // 3/1951
    },
    {
        question: "Câu 19: Trong tạm ước 14/9/1946, Việt Nam tiếp tục nhân nhượng cho Pháp một số quyền lợi về",
        options: ["kinh tế và văn hoá", "kinh tế, chính trị", "chính trị, quân sự", "kinh tế và quân sự"],
        answer: 0 // kinh tế và văn hoá
    },
    {
        question: "Câu 20: Tháng 3-1951, Đại Hội thống nhất Việt Minh và Liên Việt thành...",
        options: ["Mặt trận Việt Nam cách mạng thanh niên", "Mặt trận Việt Minh", "Mặt trận Tổ Quốc", "Mặt trận Liên hiệp quốc dân Việt Nam (Liên Việt)"],
        answer: 3
    },
    {
        question: "Câu 21: Việt Nam kí với Pháp Hiệp định Sơ bộ ngày 6/3/1946 nhằm mục đích gì?",
        options: ["Chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam", "Tạo điều kiện xây dựng đất nước sau cách mạng", "Phân hóa kẻ thù, tập trung đánh kẻ thù chủ yếu", "Hoàn hoãn với Pháp để đấu tranh quân sự với Trung Hoa dân quốc"],
        answer: 2
    },
    {
        question: "Câu 22: Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa được Quốc hội thông qua vào thời gian nào?",
        options: ["9/1946", "10/1946", "11/1946", "12/1946"],
        answer: 2
    },
    {
        question: "Câu 23: Việt Nam đã bắt đầu đặt quan hệ ngoại giao với Trung Quốc, Liên Xô và một số nước khác vào thời điểm nào?",
        options: ["Năm 1945", "Năm 1948", "Năm 1950", "Năm 1953"],
        answer: 2 // Năm 1950
    },
    {
        question: "Câu 24: Nội dung nào không phản ánh đúng thuận lợi của Việt Nam sau Cách mạng tháng Tám 1945?",
        options: ["Nhân dân giành quyền làm chủ, phấn khởi, gắn bó với chế độ", "Có sự ủng hộ, giúp đỡ tích cực của lực lượng Đồng minh", "Phong trào giải phóng dân tộc dâng cao; hệ thống xã hội chủ nghĩa hình thành", "Có Đảng, đứng đầu là Chủ tịch Hồ Chí Minh sáng suốt lãnh đạo"],
        answer: 1
    },
    {
        question: "Câu 25: Nhằm xây dựng và củng cố chính quyền cách mạng, tháng 5/1946 lực lượng vũ trang của Việt Nam được đổi tên thành...",
        options: ["Việt Nam giải phóng quân", "Quân đội nhân dân Việt Nam", "Vệ quốc đoàn", "Quân đội quốc gia Việt Nam"],
        answer: 3
    }
];


let currentQuestionIndex = 0;

// Hiển thị câu hỏi
function showQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = ""; // Xóa nội dung cũ

    const questionData = questions[currentQuestionIndex];
    const questionTitle = document.createElement("h2");
    questionTitle.textContent = questionData.question;

    quizContainer.appendChild(questionTitle);

    questionData.options.forEach((option, index) => {
        const optionButton = document.createElement("div");
        optionButton.classList.add("option");
        optionButton.textContent = option;

        // Gắn sự kiện click cho mỗi lựa chọn
        optionButton.addEventListener("click", () => handleAnswer(index));
        quizContainer.appendChild(optionButton);
    });
}

// Xử lý chọn đáp án
function handleAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    const options = document.querySelectorAll(".option");

    // Kiểm tra đúng hay sai
    options.forEach((option, index) => {
        if (index === questionData.answer) {
            option.classList.add("correct"); // Đáp án đúng
        }
        if (index === selectedIndex && index !== questionData.answer) {
            option.classList.add("incorrect"); // Đáp án sai
        }
        option.style.pointerEvents = "none"; // Vô hiệu hóa các lựa chọn
    });

    // Hiển thị nút "Câu tiếp theo"
    document.getElementById("next-btn").style.display = "block";
}

// Chuyển đến câu hỏi tiếp theo
document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Hiển thị câu hỏi tiếp theo
        document.getElementById("next-btn").style.display = "none"; // Ẩn nút
    } else {
        // Kết thúc bài trắc nghiệm
        const quizContainer = document.getElementById("quiz-container");
        quizContainer.innerHTML = `<h2>Bạn đã hoàn thành bài trắc nghiệm!</h2>`;
        document.getElementById("next-btn").style.display = "none";
    }
});

// Bắt đầu bài trắc nghiệm
showQuestion();
