import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  // Lấy thông tin Authorization từ header
  const authHeader = req.headers.authorization;

  // Kiểm tra xem header có tồn tại và có định dạng 'Bearer <token>' không
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  // Tách token ra khỏi header
  const token = authHeader.split(' ')[1];

  try {
    // Giải mã token với khóa công khai từ Clerk
    const decoded = jwt.verify(token, process.env.CLERK_PUBLIC_KEY); // Sử dụng public key của Clerk

    // Thêm thông tin userId vào req.auth để sử dụng trong các middleware tiếp theo
    req.auth = { userId: decoded.sub };

    // Chuyển sang middleware tiếp theo
    next();
  } catch (err) {
    // Log chi tiết lỗi nếu có
    console.error('Token verification failed:', err);
    
    // Trả về lỗi nếu token không hợp lệ
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

export default verifyToken;
