const express = require('express');
const passport = require('passport');
const session = require('express-session');
const exp = require('constants');
const KaKaoStrategy = require('passport-kakao').Strategy;
require('dotenv').config();

const app = express();

// 세션 설정
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// Passport 초기화
app.use(passport.initialize());
app.use(passport.session());

// Passport Kakao 전략 설정
passport.use(new KaKaoStrategy({
    clientID: process.env.KAKAO_CLIENT_ID,
    callbackURL: process.env.KAKAO_CALLBACK_URL,
    clientSecret: ''
},
function(accessToken, refreshToken, profile, done) {
    // 데이터 베이스에 저장 투가 코드 작성하기
    return done(null, profile);
}
));

// 사용자 직렬화 및 역직렬화
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  // 홈 페이지
app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      res.send(`<h1>안녕하세요, ${req.user.username}님!</h1><a href="/logout">로그아웃</a>`);
    } else {
      res.send('<a href="/auth/kakao">카카오 로그인</a>');
    }
  });

  // 카카오 로그인 요청
app.get('/auth/kakao',
passport.authenticate('kakao'));

// 카카오 로그인 콜백
app.get('/auth/kakao/callback', 
passport.authenticate('kakao', { failureRedirect: '/' }),
function(req, res) {
  // 성공 시 홈으로 리다이렉트
  res.redirect('/');
}
);

// 로그아웃
app.get('/logout', (req, res) => {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });
  
  // 서버 시작
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 시작되었습니다.`);
  });

  app.use(express.static('public'));