/**
 * HỆ THỐNG THẨM ĐỊNH TÍN DỤNG - EASYLOAN (LEGACY CODE)
 * Tình trạng: Lỗi Arrow Anti-Pattern (if-else lồng nhau quá sâu).
 */
function verifyLoanEligibility(user) {
    let result = "";

    // BAD CODE: 5 tầng điều kiện lồng nhau cực kỳ khó bảo trì
    if (user.isActive === true) {
        if (user.age >= 18) {
            if (user.income >= 10000000) {
                if (user.creditScore > 600) {
                    if (user.hasBadDebt === false) {
                        result = "Thành công: Đủ điều kiện vay vốn";
                    } else {
                        result = "Từ chối: Khách hàng đang có nợ xấu";
                    }
                } else {
                    result = "Từ chối: Điểm tín dụng quá thấp";
                }
            } else {
                result = "Từ chối: Thu nhập không đủ điều kiện";
            }
        } else {
            result = "Từ chối: Khách hàng chưa đủ tuổi";
        }
    } else {
        result = "Từ chối: Tài khoản đang bị khóa";
    }

    return result;
}

// --- KHU VỰC THỬ NGHIỆM CỦA HỌC VIÊN ---
const testUser = {
    isActive: true,
    age: 25,
    income: 15000000,
    creditScore: 650,
    hasBadDebt: false
};
console.log("Kết quả test:", verifyLoanEligibility(testUser));