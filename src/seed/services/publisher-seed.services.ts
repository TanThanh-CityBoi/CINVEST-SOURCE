import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PublisherEntity } from 'src/modules/publishers/entities/publisher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PublisherSeedService {
  constructor(
    @InjectRepository(PublisherEntity)
    private readonly publisherRepo: Repository<PublisherEntity>,
  ) {}

  // 1 : system post
  // 2 : external post

  private readonly dataPublishers = [
    {
      id: 1,
      name: 'VNExpress',
      description:
        '<p>Thuộc Bộ Khoa học Công nghệ - Số giấy phép: 548/GP-BTTTT ngày 24/08/2021&nbsp;</p><p>Tòa soạn: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội&nbsp;</p><p>Phone: 024 7300 8899 - máy lẻ 4500</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/-srx8r2gXKVNExpress.png',
      created_at: '19/8/2022 08:51:44',
      updated_at: '14/2/2023 09:17:12',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 10,
      name: 'Báo VietNamNet',
      description:
        "<p>Cơ quan chủ quản: Bộ Thông tin và Truyền thông - Số giấy phép: 09/GP - BTTTT, cấp ngày 07/01/2019&nbsp;</p><p>Tòa soạn: Tòa nhà C'Land - 156 Xã Đàn 2, Đống Đa, Hà Nội&nbsp;</p><p>Hotline: 19001081 (8-20h) | 0923457788 (ngoài giờ HC) Hà Nội.&nbsp;</p><p>Hotline: 0919 405 885 Tp.HCM.&nbsp;</p><p>Hotline: 0919 435 885&nbsp;</p><p>Email : contact@vietnamnet.vn</p>",
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/EVd3Cu5UFUVietNamNet.png',
      created_at: '23/9/2022 03:25:41',
      updated_at: '14/2/2023 09:15:39',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 100,
      name: 'Báo điện tử Phụ nữ Việt Nam',
      description:
        '<p>Giấy phép báo điện tử số: 677/GP - BTTTT - Cơ quan trung ương của Hội Liên hiệp Phụ nữ Việt Nam&nbsp;</p><p>Tòa soạn: 47 Hàng Chuối, Tp. Hà Nội&nbsp;</p><p>Phone: 84-24-3971 3500 Fax: 84-24-3821 3202&nbsp;</p><p>Hotline: 094.170.7373&nbsp;</p><p>Email: pnvnonline@phunuvietnam.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/6u1oh_jKWvPhuNuVietNam.png',
      created_at: '24/9/2022 13:26:43',
      updated_at: '14/2/2023 08:33:27',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 101,
      name: 'Tạp chí Sức khỏe +',
      description:
        '<p>Giấy phép số 496/GP-BTTTT cấp ngày 03/08/2021&nbsp;</p><p>Tòa soạn: Tầng 14 - Tòa nhà Cung Trí thức - Số 1 Tôn Thất Thuyết - Dịch Vọng Hậu - Cầu Giấy - Hà Nội&nbsp;</p><p>Phone/Fax: 024.3931.0432&nbsp;</p><p>Email: banbientap.suckhoecong@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/SjlE8Vr4hyTapChiSucKhoe.png',
      created_at: '24/9/2022 13:28:29',
      updated_at: '14/2/2023 08:33:09',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 102,
      name: 'Tạp chí Sức khỏe cộng đồng',
      description:
        '<p>Giấy phép hoạt động báo chí: Số 52/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 11/02/2020 - Trung ương hội giáo dục chăm sóc sức khỏe cộng đồng Việt Nam&nbsp;</p><p>Trụ sở tòa soạn: Số 99 đường Nguyễn Phong Sắc, phường Dịch Vọng Hậu, quận Cầu Giấy, TP.Hà Nội&nbsp;</p><p>Văn phòng đại diện TP Hồ Chí Minh: Số 37 Lê Quốc Hưng, Phường 12, Quận 4, TP. Hồ Chí Minh&nbsp;</p><p>Email: Suckhoecongdong.tc@gmail.com&nbsp;</p><p>Hotline: 091.494.6668</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/vjkn_RTM2dSucKhoeCongDong.png',
      created_at: '24/9/2022 13:32:23',
      updated_at: '14/2/2023 08:32:55',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 103,
      name: 'Tạp chí Tài chính Doanh nghiệp',
      description:
        '<p>Giấy phép hoạt động báo điện tử số: 249/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 18/6/2019 - Cơ quan của Hội Tư vấn Thuế Việt Nam&nbsp;</p><p>Tòa soạn: Tầng 5, số 100 Lò Đúc, Quận Hai Bà Trưng, Hà Nội&nbsp;</p><p>Phone:(024)39712299/9016&nbsp;</p><p>Hotline: 086 508 6899&nbsp;</p><p>Email: tapchitaichinhdoanhnghiep@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/q_mEhEw9CkTaiChinhDoanhNghiep.png',
      created_at: '24/9/2022 13:34:31',
      updated_at: '14/2/2023 08:32:41',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 104,
      name: 'Tạp chí Nông thôn mới',
      description:
        '<p>Giấy phép của Bộ Thông tin &amp; Truyền thông số 660/GP-BTTTT cấp ngày 12/10/2021 - Cơ quan Trung ương của Hội Nông dân Việt Nam&nbsp;</p><p>Tòa soạn: Tầng 7, Toà nhà Báo Nông Thôn Ngày Nay, Lô E2, Phố Dương Đình Nghệ, P Yên Hòa, Q Cầu Giấy, Hà Nội&nbsp;</p><p>Phone: 02437281062&nbsp;</p><p>Hotline: 0948300108&nbsp;</p><p>Văn phòng Phía Nam: 236A/6 Lê Văn Sỹ, P1, Q.Tân Bình, TP.HCM&nbsp;</p><p>Phone: 02839913578 - 0987944567</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/wTsKeueDERNongThonMoi.png',
      created_at: '24/9/2022 13:36:50',
      updated_at: '14/2/2023 08:32:26',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 106,
      name: 'Báo Thanh Niên',
      description:
        '<p>Giấy phép xuất bản số 110/GP - BTTTT cấp ngày 24.3.2020 - Diễn đàn của Hội liên hiệp Thanh niên Việt Nam Tại TP. Hồ Chí Minh</p><p>Phòng Phát hành báo Thanh Niên: 268-270 Nguyễn Đình Chiểu, Phường Võ Thị Sáu, Quận 3 TP.HCM&nbsp;</p><p>Phone: 028.39309243 – 0903.03.57.58.&nbsp;</p><p>Email : phathanh@thanhnien.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/-R5eLE_f-pThanhNien.png',
      created_at: '24/9/2022 13:42:57',
      updated_at: '14/2/2023 08:31:31',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 107,
      name: 'Tạp chí Thời Đại - Vietnam Times',
      description:
        '<p>Giấy phép hoạt động báo chí điện tử số 73 cấp ngày 26/2/2020 do Bộ trưởng Bộ Thông tin và Truyền thông - Diễn đàn của Liên hiệp các tổ chức hữu nghị Việt Nam&nbsp;</p><p>Tòa soạn: Số 61 Bà Triệu, phường Hàng Bài, quận Hoàn Kiếm, Hà Nội&nbsp;</p><p>Phone: 84-24-39445396 Fax: 84-24-39445397&nbsp;</p><p>Email: toasoan@thoidai.com.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/NBdFWdEQr5ThoiDai.png',
      created_at: '24/9/2022 13:44:21',
      updated_at: '14/2/2023 08:31:16',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 108,
      name: 'Tạp chí Thương gia Online',
      description:
        '<p>Giấy phép hoạt động báo chí số 535/GP-BTTTT, do Bộ Thông tin và Truyền thông cấp ngày 19/11/2020 - Cơ quan ngôn luận của Hiệp hội Phát triển hàng tiêu dùng Việt Nam (VACOD) -Hiệp hội Doanh nghiệp thành phố Hà Nội (HBA)&nbsp;</p><p>Tòa soạn: Số 14, Khu 249A Thụy Khuê, Quận Tây Hồ, Hà Nội&nbsp;</p><p>Phone: (+84)879.504.666&nbsp;</p><p>Email: toasoan@thuonggiaonline.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/4Pu_yZUsFBThuongGiaOnline.png',
      created_at: '24/9/2022 13:46:09',
      updated_at: '14/2/2023 08:28:08',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 109,
      name: 'Tạp chí Thương hiệu & Công luận',
      description:
        '<p>Giấy phép hoạt động báo chí điện tử số 64/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 21/2/2020 - Cơ quan Trung ương Hiệp hội Vatap&nbsp;</p><p>Tòa soạn: Ngõ 118/8/12 Nguyễn Khánh Toàn - Quan Hoa - Cầu Giấy - Hà Nội&nbsp;</p><p>Email: thuonghieucongluan@gmail.com&nbsp;</p><p>Phone: 024. 38398452</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/Q-GYgVrn3WThuongHieu%26CongLuan.png',
      created_at: '24/9/2022 13:47:55',
      updated_at: '14/2/2023 08:22:29',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 11,
      name: 'Zing News',
      description:
        '<p>Cơ quan chủ quản: Hội Xuất bản Việt Nam - Giấy phép báo chí: số 75/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 26/02/2020.&nbsp;</p><p>Tòa soạn: Tầng 7, D29 Phạm Văn Bạch, Quận Cầu Giấy, Hà Nội&nbsp;</p><p>Hotline: 0931.222.666&nbsp;</p><p>Email: toasoan@zing.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/FY_3VF0VHFZing.png',
      created_at: '23/9/2022 03:29:29',
      updated_at: '14/2/2023 09:15:29',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 110,
      name: 'Tạp chí điện tử Thương hiệu và Sản phẩm',
      description:
        '<p>Giấy phép hoạt động Báo chí số 106/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 19/3/2020 - Cơ quan ngôn luận của Hội khoa học các sản phẩm thiên nhiên Việt Nam (VNPS)&nbsp;</p><p>Tòa soạn: Số nhà A20. TT17 đường Nguyễn Khuyến (KĐT Văn Quán) - P. Phúc La - Q. Hà Đông - TP Hà Nội.&nbsp;</p><p>Email: tsthuonghieusanpham@gmail.com&nbsp;</p><p>Văn phòng đại diện tại TP. HCM Tòa soạn: Lô D11, Valencia Riverside, P. Phú Hữu, TP. Thủ Đức, TP.HCM.&nbsp;</p><p>Hotline: 0961605565</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/ysQQ0b_sNJThuongHieu%26SanPham.png',
      created_at: '24/9/2022 13:49:34',
      updated_at: '14/2/2023 08:21:44',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 111,
      name: 'Tạp chí điện tử Thương hiệu và Pháp luật',
      description:
        '<p>Giấy phép hoạt động báo chí điện tử số 574/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 19/12/2016 - Cơ quan ngôn luận của Trung ương Hội Nghệ nhân và Thương hiệu Việt Nam&nbsp;</p><p>Tòa soạn: Toà nhà Cung tri thức: Số 1 Tôn Thất Thuyết, Cầu Giấy, Hà Nội&nbsp;</p><p>Phone/Fax: 02432007930 - 091.1344.555&nbsp;</p><p>Email: bbt.thpl@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/4NTSF_cuctThuongHieu%26PhapLuat.png',
      created_at: '24/9/2022 13:51:25',
      updated_at: '14/2/2023 08:21:25',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 112,
      name: 'Báo Tiền Phong',
      description:
        '<p>Giấy phép số 76/GP-BTTTT, cấp ngày 26/02/2020 - Cơ quan chủ quản: Trung ương Đoàn TNCS Hồ Chí Minh Tòa soạn: 15 Hồ Xuân Hương, Hà Nội&nbsp;</p><p>Phone: 024.39431250&nbsp;</p><p>Email: online.baotienphong@gmail.com&nbsp;</p><p>Hotline: 0865.015.015 - 0977.456.112</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/zeibIQxAabTienPhong.png',
      created_at: '24/9/2022 13:52:52',
      updated_at: '14/2/2023 08:21:04',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 113,
      name: 'VietnamFinance',
      description:
        '<p>Giấy phép xuất bản báo chí điện tử số 499/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 03/08/2021 - Cơ quan chủ quản: Hiệp hội tư vấn tài chính Việt Nam (VFCA).&nbsp;</p><p>Tòa soạn: Tầng 2, Tòa nhà N02-T3 Quang Minh Land, Khu đô thị Đoàn ngoại giao, Phường Xuân Tảo, Quận Bắc Từ Liêm, Thành phố Hà Nội.&nbsp;</p><p>Văn phòng TP.HCM: Tòa nhà 258 Tôn Đản, Phường 8, Quận 4, TP. HCM.&nbsp;</p><p>Phone: 0946861230&nbsp;</p><p>Văn phòng Bắc Trung Bộ: Phòng 08, Tòa nhà CED Central số 02 Vũ Quang, TP. Hà Tĩnh.&nbsp;</p><p>Phone: 0931337833&nbsp;</p><p>Văn phòng Nam Trung Bộ: Số 351 Lê Thanh Nghị, Quận Hải Châu, TP. Đà Nẵng.&nbsp;</p><p>Phone: 0903579043</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/zYeCi9sNeuVietNamFinance.png',
      created_at: '24/9/2022 13:55:37',
      updated_at: '14/2/2023 08:20:50',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 114,
      name: 'VnEconomy',
      description:
        '<p>Giấy phép Tạp chí điện tử số: 272/GP-BTTTT ngày 26/6/2020&nbsp;</p><p>Trụ sở: Số 96-98 Hoàng Quốc Việt, Cầu Giấy, Hà Nội&nbsp;</p><p>Phone: (84-24) 62603760 / 02437552050</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/Lp_Ml89e_OVNEconomy.png',
      created_at: '24/9/2022 13:58:04',
      updated_at: '14/2/2023 08:20:23',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 115,
      name: 'Art Times',
      description:
        '<p>Giấy phép số 173/GP-BTTTT của Bộ TT&amp;TT cấp ngày 24/4/2020 - Cơ quan của Liên hiệp các Hội Văn học Nghệ thuật Việt Nam&nbsp;</p><p>Tòa soạn: 51 Trần Hưng Đạo, Hàng Bài, Hoàn Kiếm, Hà Nội&nbsp;</p><p>Điện thoại: 024 62 900 262&nbsp;</p><p>Đường dây nóng: 024 66 839 235&nbsp;</p><p>Thư điện tử: toasoan.vhnt@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/OSEOWZw9lOArtTimes.png',
      created_at: '24/9/2022 14:01:53',
      updated_at: '14/2/2023 08:17:53',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 116,
      name: 'Tạp chí Doanh nhân và Pháp lý',
      description:
        '<p>Giấy phép hoạt động báo chí điện tử số 18/GP-BTTTT cấp ngày 08/01/2021 - Cơ quan của Viện Hỗ trợ pháp lý và bảo vệ môi trường&nbsp;</p><p>Tòa soạn: Cung trí thức Thành phố, Số 1, Tôn Thất Thuyết, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội&nbsp;</p><p>VP tòa soạn: Nhà số 10, Khu Cán bộ cao cấp Học viện quốc phòng, phố Nghĩa Đô, Cầu Giấy, Hà Nội&nbsp;</p><p>Hotline: 024.3728.1575&nbsp;</p><p>Email: toasoan@doanhnhanphaply.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/Ox3jihQHxODoanhNhan%26PhapLy.png',
      created_at: '24/9/2022 14:06:40',
      updated_at: '14/2/2023 07:01:45',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 117,
      name: 'Lý luận Chính trị và Truyền thông',
      description:
        '<p>Giấy phép hoạt động báo chí số 213/GP-BTTTT do Bộ Thông tin và Truyền thông cấp, ngày 13/4/2021 - Học viện Báo chí và Truyền thông&nbsp;</p><p>Tòa soạn : Tạp chí Lý luận chính trị và Truyền thông 36 Xuân Thủy, Cầu Giấy, Hà Nội&nbsp;</p><p>Phone: 024.38348033&nbsp;</p><p>Email: llcttt1994@yahoo.com.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/YaR4uLEIGhLyLuanChinhTri%26TruyenThong.png',
      created_at: '24/9/2022 14:09:36',
      updated_at: '14/2/2023 07:01:19',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 118,
      name: 'Thanh Niên Việt',
      description:
        '<p>Giấy phép hoạt động báo điện tử số: 185/GP - Bộ TTTT - CƠ QUAN CỦA TRUNG ƯƠNG ĐOÀN TNCS HỒ CHÍ MINH.&nbsp;</p><p>Tòa soạn: Số 5 Chùa Láng, quận Đống Đa, Hà Nội&nbsp;</p><p>Phone: 024 37751 671 Fax: 024 37751 798&nbsp;</p><p>Email: thanhnienviet.vn@gmail.com&nbsp;</p><p>Hotline: 0913533992 Ban đại diện phía Nam&nbsp;</p><p>Tòa soạn: 145 Pasteur, quận 3, Thành phố Hồ Chí Minh</p><p>Phone: 028.38422616, 028.66710688&nbsp;</p><p>Email: thanhnienviet24h@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/z8LaNkpqvlThanhNienViet.png',
      created_at: '24/9/2022 14:16:16',
      updated_at: '14/2/2023 07:00:57',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 119,
      name: 'Tạp chí Nghe nhìn Kinh tế Việt Nam',
      description:
        '<p>Giấy phép số: 142/GP-TTĐT do Cục Phát thanh, Truyền hình và Thông tin điện tử, Bộ Thông tin và Truyền thông cấp ngày 17/08/2020 - Cơ quan chủ quản Viện Thông tin kinh tế và Phát triển&nbsp;</p><p>Văn phòng phía Bắc: Tầng 3 - 66 ngõ 34 Hoàng Cầu - Đống Đa - Hà Nội&nbsp;</p><p>Phone: 0246.2939.936&nbsp;</p><p>Văn phòng phía Nam: 180/45 Nguyễn Hữu Cảnh - Q. Bình Thạnh - TP.HCM&nbsp;</p><p>Phone: 0282.2508.555&nbsp;</p><p>Email: toasoan@nghenhinvietnam.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.amazonaws.com/dev/news_brand/thumbs/30_1664029151662_c1d9752a_25.png',
      created_at: '24/9/2022 14:19:12',
      updated_at: '6/10/2022 06:46:56',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 12,
      name: 'Đời Sống & Pháp Luật',
      description:
        '<p>Giấy phép số 33/GP-TTĐT do Bộ Thông tin và Truyền thông cấp.&nbsp;</p><p>Tòa soạn: Tầng 4, Tòa tháp Ngôi Sao - Star Tower, đường Dương Đình Nghệ - Phường Yên Hòa - Quận Cầu Giấy - Hà Nội.&nbsp;</p><p>Phone: 0983108812&nbsp;</p><p>Email: dsplonline.toasoan@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/c7gNJX3dwYDoiSong%26PhapLuat.png',
      created_at: '23/9/2022 03:32:12',
      updated_at: '14/2/2023 09:15:17',
      organization: 2,
      source_types: ['1', '2'],
    },
    {
      id: 120,
      name: 'Báo điện tử VnMedia',
      description:
        '<p>Giấy phép số 15/GP-BTTTT của Bộ Thông tin và Truyền thông&nbsp;</p><p>Tòa soạn: 57 Huỳnh Thúc Kháng - Đống Đa - Hà Nội&nbsp;</p><p>Đường dây nóng: 0946 558 686&nbsp;</p><p>Thư điện tử: toasoan@vnmedia.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/3hnvOmbQlgVNMedia.png',
      created_at: '24/9/2022 14:21:31',
      updated_at: '14/2/2023 06:59:22',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 121,
      name: 'Tạp chí Văn Hiến Plus',
      description:
        '<p>Giấy phép hoạt động báo chí in số 249/GP-BTTTT. Cấp ngày 07/05/2021 &amp; Giấy phép hoạt động số 62/GP-TTĐT. Cấp ngày 25/05/2022. - Cơ quan ngôn luận của Viện Nghiên cứu Bảo tồn và Phát huy Văn hóa Dân tộc.&nbsp;</p><p>Tòa soạn: Phòng A101, 54 Nguyễn Văn Cừ, Phường Bồ Đề, Quận Long Biên, Hà Nội&nbsp;</p><p>Email: vanhienvietnam1@gmail.com&nbsp;</p><p>Phone: 0243 7676 555&nbsp;</p><p>Hotline: 0941953888</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/HbwxSKqjxsVanHienPlus.png',
      created_at: '24/9/2022 14:23:46',
      updated_at: '14/2/2023 06:59:02',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 122,
      name: 'Tạp chí Văn hóa và Phát triển',
      description:
        '<p>Giấy phép hoạt động báo chí số: 247/GP- BTTTT ngày 07/5/2021 của Bộ TT&amp;TT - Cơ quan của Viện nghiên cứu Văn hóa và Phát triển.&nbsp;</p><p>Tòa soạn: Số 9 ngõ 26, phố Hoàng Cầu, Đống Đa, Hà Nội&nbsp;</p><p>Phone: 024.3511.2850&nbsp;</p><p>Hotline: 0846 460 404&nbsp;</p><p>Email: tcvanhoaphattrien@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/YbhjeObdy1VanHoa%26PhatTrien.png',
      created_at: '24/9/2022 14:26:05',
      updated_at: '14/2/2023 06:58:38',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 123,
      name: 'Tạp chí Pháp Lý',
      description:
        '<p>Giấy phép hoạt động báo chí điện tử số: 107/GP -BTTTT do Bộ Thông tin và Truyền thông cấp - Cơ quan chủ quản: Viện KH Pháp lý và Kinh doanh Quốc tế (IBLA - Hội Luật gia Việt Nam)&nbsp;</p><p>Tòa soạn: Tòa nhà số 51B, ngõ 83 đường Trần Duy Hưng, Q.Cầu Giấy, TP.Hà Nội.&nbsp;</p><p>Phone: 024.3556.9373&nbsp;</p><p>Fax: 024.3556.9175&nbsp;</p><p>Email: toasoan@phaply.vn&nbsp;</p><p>Hotline: 0915.999.467&nbsp;</p><p>Email: phapluatbanquyen@phaply.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/A0tFUswwmdPhapLy.png',
      created_at: '24/9/2022 14:27:46',
      updated_at: '14/2/2023 06:58:22',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 124,
      name: 'Tạp chí Oto Xe máy Việt Nam',
      description:
        '<p>Giấy phép số: 316/GP-BTTTT ngày 28/5/2021 - Cơ quan chủ quản: Viện Ứng dụng Công nghệ Môi trường Đô thị&nbsp;</p><p>Tòa soạn: 36/19/9 Kim Đồng, Hoàng Mai, Hà Nội.&nbsp;</p><p>Tel: 024. 3717 1188&nbsp;</p><p>Email: toasoan@otoxemay.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/rkQ9ezgEoHOto-XemayVN.png',
      created_at: '24/9/2022 14:29:53',
      updated_at: '14/2/2023 06:58:05',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 125,
      name: 'Báo Phụ Nữ',
      description:
        '<p>Giấy phép số: 63/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 29/1/2021 - Cơ quan chủ quản: Thành ủy Thành phố Hồ Chí Minh Liên hệ&nbsp;</p><p>Tòa soạn: 311 Điện Biên Phủ, Phường 4, Quận 3, TP.HCM&nbsp;</p><p>Email: online@baophunu.org.vn&nbsp;</p><p>Phone: (028) 39 316 854&nbsp;</p><p>Fax: (028) 39 316 723</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/cVspDHqiXoPhuNuThuDo.png',
      created_at: '25/9/2022 11:43:08',
      updated_at: '14/2/2023 06:57:43',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 126,
      name: 'Báo Tuổi trẻ Thủ Đô',
      description:
        '<p>Giấy phép số: 274/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 13 tháng 5 năm 2021 - Cơ quan của Đoàn TNCS Hồ Chí Minh Tp Hà Nội&nbsp;</p><p>Tòa soạn: Số 19 phố Lý Thường Kiệt, quận Hoàn Kiếm, TP Hà Nội&nbsp;</p><p>Hotline: 0929242424&nbsp;</p><p>Email: tuoitrethudoonline@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/rvJd5b7DD1TuoiTre.png',
      created_at: '25/9/2022 11:51:56',
      updated_at: '14/2/2023 06:56:47',
      organization: 3,
      source_types: ['1', '2'],
    },
    {
      id: 127,
      name: 'Báo Tuổi Trẻ',
      description:
        '<p>Giấy phép hoạt động báo điện tử tiếng Việt, tiếng Anh Số 09/GP-BTTTT, cấp ngày 06-01-2014 - Đoàn Thanh niên Cộng sản Hồ Chí Minh Thành phố Hồ Chí Minh&nbsp;</p><p>Tòa soạn: Số 60A, Hoàng Văn Thụ, Phường 9, Quận Phú Nhuận, Thành phố Hồ Chí Minh, Việt Nam&nbsp;</p><p>Hotline: 0918.033.133 - (84.28) 39.971.010</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/Sr6JJT28MXTuoiTreOnline.png',
      created_at: '25/9/2022 11:57:01',
      updated_at: '14/2/2023 06:56:31',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 128,
      name: 'Saigon Times Online - Tạp chí Kinh tế Sài Gòn',
      description:
        '<p>Giấy phép Tạp chí điện tử số 133/GP-BTTTT, cấp ngày 02/3/2021 - Tạp chí của UBND TP Hồ Chí MInh&nbsp;</p><p>Tòa soạn: 35 Nam Kỳ Khởi Nghĩa, Quận 1, TP.HCM&nbsp;</p><p>Phone:(8428)3829 5936&nbsp;</p><p>Fax:(8428)3829 4294&nbsp;</p><p>Email: online@kinhtesaigon.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/70YDeYkfl4KinhTeSaiGon.png',
      created_at: '25/9/2022 12:00:33',
      updated_at: '14/2/2023 06:55:46',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 129,
      name: 'Tạp chí Du lịch TP Hồ Chí Minh',
      description:
        '<p>GIẤY PHÉP Số 27/GP - BTTTT Ngày cấp 14/1/2021 - Cơ quan chủ quản: Ủy ban Nhân dân Thành phố Hồ Chí Minh ISSN: 2615 – 9627&nbsp;</p><p>Tòa soạn: Lầu 1 - Số 3, Công trường Quốc tế, Phường Võ Thị Sáu, Quận 3, TP.HCM&nbsp;</p><p>Phone: (+84-28) 38.226.879&nbsp;</p><p>Email: toasoan@tcdulichtphcm.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/14bMITqIadDuLichTPHCM.png',
      created_at: '25/9/2022 12:02:40',
      updated_at: '14/2/2023 06:54:44',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 13,
      name: 'CIN Business',
      description: '<p>Báo điện tử thuộc sở hữu Cinvest Network</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/hg6E50cXPAdsadsa.png',
      created_at: '23/9/2022 03:33:40',
      updated_at: '14/2/2023 09:14:27',
      organization: 2,
      source_types: ['1', '2'],
    },
    {
      id: 130,
      name: 'Báo Người lao động',
      description:
        '<p>Giấy phép số 115/GP- BTTTT cấp ngày 09 tháng 02 năm 2021 của Bộ Thông tin và Truyền thông - CƠ QUAN CHỦ QUẢN: THÀNH ỦY THÀNH PHỐ HỒ CHÍ MINH&nbsp;</p><p>Tòa soạn: 127 Võ Văn Tần, Phường Võ Thị Sáu, Quận 3 - TPHCM&nbsp;</p><p>Phone: 028-3930.6262 / 028-3930.5376&nbsp;</p><p>Fax: 028-3930.4707</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/WwGd3z6KEeNguoiLaoDong.png',
      created_at: '25/9/2022 12:04:17',
      updated_at: '14/2/2023 06:54:24',
      organization: 3,
      source_types: ['1', '2'],
    },
    {
      id: 131,
      name: 'Báo Lao động Thủ Đô',
      description:
        '<p>Giấy phép Báo điện tử số: 143/GP - BTTTT ngày 17/3/2022 - Trụ sở: số 1 A, Yết Kiêu, Hoàn Kiếm, Hà Nội - Cơ quan của Liên đoàn lao động TP Hà Nội&nbsp;</p><p>Phone: 024.38220676 Fax: 024.39426008&nbsp;</p><p>Tòa soạn: Tp HCM: 31 Trần Quốc Thảo, P.6. Q3, TP. Hồ Chí Minh&nbsp;</p><p>Email: laodongthudo.hn@gmail.com&nbsp;</p><p>Hotline: 0913015183</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/H9AjiE9k4iLaoDongThuDo.png',
      created_at: '25/9/2022 12:06:21',
      updated_at: '14/2/2023 06:54:11',
      organization: 3,
      source_types: ['1', '2'],
    },
    {
      id: 132,
      name: 'Báo Kinh tế Đô thị',
      description:
        '<p>Giấy phép của Bộ Thông tin &amp; Truyền thông số 196/GP-BTTTT cấp ngày 21/04/2022 - Cơ quan chủ quản: UBND TP Hà Nội&nbsp;</p><p>Trụ sở: 21 Huỳnh Thúc Kháng, Đống Đa, Hà Nội&nbsp;</p><p>Phone: 024.37760444 (133)&nbsp;</p><p>Hotline: 0982 015 015&nbsp;</p><p>Email: ktdtonline@gmail.com&nbsp;</p><p>Fax: 024.32484413</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/ivNIuC2tTUKinhTe%26DoThi.png',
      created_at: '25/9/2022 12:14:51',
      updated_at: '14/2/2023 06:53:58',
      organization: 3,
      source_types: ['1', '2'],
    },
    {
      id: 133,
      name: 'Tạp chí Giáo dục Tp HCM',
      description:
        '<p>Giấy phép xuất bản: 47/GP-BTTTT, cấp ngày 21/01/2021 - Tạp chí của UBND TP Hồ Chí Minh&nbsp;</p><p>Tòa soạn: Tạp chí Giáo dục TP.HCM - 300 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, TP.HCM&nbsp;</p><p>Hotline: 0903 870 779</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/aKA6RU7WSOGiaoDucOnline.png',
      created_at: '25/9/2022 12:41:43',
      updated_at: '14/2/2023 06:53:41',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 134,
      name: 'Doanh nhân Gài Gòn',
      description:
        '<p>Giấy phép: Số 33/GP-BTTTT, Cấp ngày 14/1/2021 - Cơ quan chủ quản: Ủy ban Nhân dân TP. Hồ Chí Minh&nbsp;</p><p>Tòa soạn: 12 Nam Kỳ Khởi Nghĩa, Phường Nguyễn Thái Bình, Quận 1, TP.Hồ Chí Minh&nbsp;</p><p>Hotline: 0915 232 024</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/MgKOeNzutSDoanhNhanSaiGon.png',
      created_at: '25/9/2022 12:44:16',
      updated_at: '14/2/2023 06:53:21',
      organization: 3,
      source_types: ['1', '2'],
    },
    {
      id: 135,
      name: 'Báo Phụ nữ Thủ Đô',
      description:
        '<p>Giấy phép: Số 699/GP-BTTTT, Bộ Thông tin và Truyền thông cấp ngày 29/10/2021 - Hội Liên hiệp Phụ nữ Thành phố Hà Nội&nbsp;</p><p>Tòa soạn: Số 7, Tôn Thất Thuyết, Cầu Giấy, Hà Nội&nbsp;</p><p>Email: baophunuthudo@gmail.com&nbsp;</p><p>Phone: 024 3942 1865&nbsp;</p><p>Fax: 024 3822 3989</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/RxraQq-W-zPhuNuThuDo.png',
      created_at: '25/9/2022 12:46:00',
      updated_at: '14/2/2023 06:52:53',
      organization: 3,
      source_types: ['1', '2'],
    },
    {
      id: 136,
      name: 'Báo Sài Gòn Giải Phóng',
      description:
        '<p>Giấy phép hoạt động Báo Điện tử trên Internet số 311/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 8-7-2015 - Đảng bộ Đảng Cộng sản Việt Nam Thành phố Hồ Chí Minh&nbsp;</p><p>Tòa soạn: 432-434 Nguyễn Thị Minh Khai, Phường 5, Quận 3, TP.HCM&nbsp;</p><p>SGGP: (028) 3.9294.091, 3.9294.092, 3.9294.093, 3.9294.097, 3.9294.098&nbsp;</p><p>Phone: (028) 3.9294.069, 3.9294.068</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/RKYj4mszjSSaiGonGiaiPhong.png',
      created_at: '25/9/2022 12:48:09',
      updated_at: '14/2/2023 06:52:31',
      organization: 3,
      source_types: ['1', '2'],
    },
    {
      id: 137,
      name: 'Báo Quốc phòng Thủ Đô',
      description:
        '<p>GPXB số 674/GP-BTTTT, ngày 19/10/2021của Bộ Thông tin - Truyền thông - Bộ Tư lệnh Thủ đô Hà Nội&nbsp;</p><p>Tòa soạn: Số 8 Phạm Hùng, phường Mễ Trì, quận Nam Từ Liêm, TP Hà Nội&nbsp;</p><p>Phone: 069.525340 - 069.525108&nbsp;</p><p>Email: quocphongthudo@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/R-yVGZAij7QuocPhongThuDo.png',
      created_at: '25/9/2022 13:16:52',
      updated_at: '14/2/2023 06:52:11',
      organization: 3,
      source_types: ['1', '2'],
    },
    {
      id: 138,
      name: 'Báo Pháp Luật TP Hồ Chí Minh',
      description:
        '<p>Giấy phép số: 636/GP-BTTTT của Bộ Thông tin và Truyền thông cấp ngày 28-12-2020 - Cơ quan chủ quản: Ủy ban Nhân dân Thành phố Hồ Chí Minh&nbsp;</p><p>Trụ Sở Chính: Cao Ốc Hoàng Việt, Số 34 Hoàng Việt, Phường 4, Quận Tân Bình, TP.HCM&nbsp;</p><p>Hotline: (028) 39910101 Fax: (028) 39914641&nbsp;</p><p>Email: Baophapluat@Phapluattp.Vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/Xp9I2aODPQPhapLuat.png',
      created_at: '25/9/2022 13:20:57',
      updated_at: '14/2/2023 06:50:57',
      organization: 3,
      source_types: ['1', '2'],
    },
    {
      id: 139,
      name: 'Báo Người Hà Nội',
      description:
        '<p>Giấy phép số: 246 /GP-TTĐT ngày 24 tháng 7 năm 2017 - Hội Liên hiệp Văn học Nghệ thuật Hà Nội&nbsp;</p><p>Trụ sở: Số 126 Nam Cao, Ba Đình, Hà Nội&nbsp;</p><p>Phone: 024 3846 5176&nbsp;</p><p>Email: banbientapnguoihanoi@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/KV_G47lXkWNguoiHaNoi.png',
      created_at: '25/9/2022 13:25:47',
      updated_at: '14/2/2023 06:50:43',
      organization: 3,
      source_types: ['1', '2'],
    },
    {
      id: 14,
      name: 'Người Đưa Tin',
      description:
        '<p>Cơ quan chủ quản: Hội Luật gia Việt Nam - Giấy phép số 80/GP-BTTTT của Bộ TT&amp;TT cấp ngày 27/2/2020&nbsp;</p><p>Tòa soạn: Tầng 4, Tòa tháp Ngôi Sao - Star Tower, đường Dương Đình Nghệ - Phường Yên Hòa - Quận Cầu Giấy - Hà Nội&nbsp;</p><p>Phone: 0903 405 146&nbsp;</p><p>Email: toasoan@nguoiduatin.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/6Ei3pRpGD7NguoiDuaTin.png',
      created_at: '23/9/2022 03:38:40',
      updated_at: '14/2/2023 09:13:57',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 140,
      name: 'Báo Hà Nội Mới',
      description:
        '<p>Giấy phép số 122/GP-BTTTT, cấp ngày: 23/3/2017 - Cơ quan chủ quản: Thành ủy Hà Nội&nbsp;</p><p>Tòa soạn: 44 Lê Thái Tổ - Hà Nội&nbsp;</p><p>Phone: (024) 38253067 – 39287445</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/NX_s7MNYhiHaNoiMoi.png',
      created_at: '25/9/2022 13:28:14',
      updated_at: '14/2/2023 06:50:31',
      organization: 3,
      source_types: ['1', '2'],
    },
    {
      id: 147,
      name: 'Shark Tank Việt Nam',
      description: '<p>Chương trình truyền hình - Bản quyền TV Hub</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/9KPsTvw5YRSharkTank.png',
      created_at: '4/10/2022 15:04:06',
      updated_at: '14/2/2023 06:50:17',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 148,
      name: 'Nikkei Asia',
      description:
        '<p>Nikkei Inc</p><p>Adress:&nbsp;</p><ul><li>- Tokyo: 137 Otemachi, Chiyodaku, Tokio, 100-8066 ; Tel: +81 3 3270 0251</li><li>- Osaka: 142 Koraibashi, Chuoku, Osakashi 541-8515; Tel: +81 6 7639 7111</li></ul>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/VfCXoAGKZ-NikkeiAsia.png',
      created_at: '4/10/2022 15:15:41',
      updated_at: '14/2/2023 06:50:04',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 149,
      name: 'Tạp chí điện tử Nhịp sống số',
      description:
        '<p>Giấy phép số 197/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 19/04/2016 - Cơ quan chủ quản: Hiệp hội Phần mềm và Dịch vụ CNTT Việt Nam - Vinasa.</p><p>Tòa soạn: Tầng 11, Cung Trí thức, Số 1 Tôn Thất Thuyết, Dịch Vọng Hậu, Cầu Giấy, Hà Nội</p><p>Tel: (024) 3577 2339</p><p>Fax: (024) 3577 2337</p><p>Hotline: 0968323388 - 0977303388</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/m6Z79rsCzJNguoiDongHanh.png',
      created_at: '4/10/2022 15:29:08',
      updated_at: '14/2/2023 06:49:48',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 15,
      name: 'An Toàn Thông Tin',
      description:
        '<p>Cơ quan chủ quản: Ban Cơ yếu Chính phủ - Giấy Phép 481/GP-BTTTT do Bộ TT&amp;TT cấp ngày 27/7/2021.&nbsp;</p><p>Tòa soạn: 105 Nguyễn Chí Thanh, Đống Đa, Hà Nội.&nbsp;</p><p>Điện thoại: 024 38357975&nbsp;</p><p>Thư điện tử: tapchiattt@bcy.gov.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/1zyXZaNbfSAnToanThongTin.png',
      created_at: '23/9/2022 03:40:58',
      updated_at: '16/5/2023 14:46:10',
      organization: 1,
      source_types: ['1'],
    },
    {
      id: 150,
      name: 'TechFest',
      description:
        '<p>NGÀY HỘI KHỞI NGHIỆP ĐỔI MỚI SÁNG TẠO&nbsp;QUỐC GIA – TECHFEST VIETNAM 2020</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/Rjlq_UJ0PCTechFest.png',
      created_at: '5/10/2022 12:45:26',
      updated_at: '14/2/2023 06:48:14',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 151,
      name: 'Oto Hui',
      description:
        '<p>Giấy phép số: 591/GP-BTTTT do Sở Thông tin và Truyền thông TP.Hồ Chí Minh cấp ngày 26/10/2017 - Cơ quan chủ quản: Công Ty Cổ Phần Truyền Thông Vast Media</p><p>Trụ sở: Nhà số 20, đường số 6, khu Hà Đô Centrosa, 118 đường 3/2, phường 12, quận 10, HCM</p><p>Hotline: 028.66.88.55.88</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/7Gl7ElyrwpOtoHui.png',
      created_at: '7/10/2022 13:06:20',
      updated_at: '14/2/2023 06:47:57',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 152,
      name: 'Vietstock',
      description:
        '<p>Giấy phép số 13/QĐ-STTTT do Sở Thông tin và Truyền thông TPHCM cấp ngày 02/11/2017 - Vận hành bởi CTCP Tài Việt.</p><p>Trụ sở: 28/47 Lê Thị Hồng, Phường 17, Quận Gò Vấp, Tp.Hồ Chí Minh, Việt Nam</p><p>Văn phòng giao dịch: 81/10B Hồ Văn Huê, Phường 9, Quận Phú Nhuận, TP.HCM</p><p>Tel: (84.28) 3848 7238 - Fax: (84.28) 3848 7237</p><p>Email: info@vietstock.vn</p><p>Đường dây nóng: 0938 046 488</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/VtCCGS8z-eVietStock.png',
      created_at: '7/10/2022 21:23:21',
      updated_at: '14/2/2023 06:47:36',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 153,
      name: 'Người Đồng hành',
      description:
        '<p>Giấy phép số 197/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 19/04/2016 - Cơ quan chủ quản: Hiệp hội Phần mềm và Dịch vụ CNTT Việt Nam - Vinasa.</p><p>Tòa soạn: Tầng 11, Cung Trí thức, Số 1 Tôn Thất Thuyết, Dịch Vọng Hậu, Cầu Giấy, Hà Nội</p><p>Tel: (024) 3577 2339</p><p>Fax: (024) 3577 2337</p><p>Hotline: 0968323388 - 0977303388</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/NSVHMeRXGZNguoiDongHanh.png',
      created_at: '8/10/2022 03:53:09',
      updated_at: '14/2/2023 06:47:21',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 154,
      name: 'Báo điện tử Pháp luật Việt Nam',
      description:
        '<p>Giấy phép xuất bản số 303/GP-BTTTT ngày 8/5/2015 - Cơ quan chủ quản: Bộ Tư pháp</p><p>Tòa soạn: Số 42/29 Nguyễn Chí Thanh, phường Ngọc Khánh, quận Ba Đình, Hà Nội</p><p>Email: baodientuphapluat@gmail.com</p><p>Hotline: 0353.63.63.55</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/IQpOz9dMdvPhapLuatVietNam.png',
      created_at: '8/10/2022 07:23:07',
      updated_at: '14/2/2023 06:47:03',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 155,
      name: 'Doanh nhân và Pháp luật',
      description:
        '<p>GPXB số 303, Bộ TTTT cấp ngày 8/7/2015</p><p>GPSĐBS số 02, Cục Báo chí cấp ngày 24/8/2016 - Bộ Tư pháp</p><p>Email: toasoan@doanhnhan.vn</p><p>&nbsp;</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/0e9v6zwIM1DoanhNhan%26PhapLuat.png',
      created_at: '8/10/2022 10:16:13',
      updated_at: '14/2/2023 06:46:40',
      organization: 2,
      source_types: ['1', '2'],
    },
    {
      id: 156,
      name: 'Pháp luật Plus',
      description:
        '<p>Giấy phép số: GPXB số 303/GP, Bộ TT&amp;TT cấp ngày 8/7/2015 - Bộ Tư pháp chuyên trang của báo Pháp luật Việt Nam</p><p>Trụ sở: Tầng 1 tòa N06-B1 đường Thành Thái - Cầu Giấy - Hà Nội.</p><p>Tòa soạn:42/29 Nguyễn Chí Thanh - Hà Nội</p><p>Email: toasoan@phapluatplus.vn</p><p>Hotline: 0976161456</p><p>Hotline: 0985101972</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/egnVG94RBXPhapLuatPlus.png',
      created_at: '8/10/2022 10:19:27',
      updated_at: '14/2/2023 06:46:21',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 157,
      name: 'Blog Doanh nhân',
      description: '<p>Đang cập nhật</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/bERVIjbAxjBlogDoanhNhan.png',
      created_at: '10/10/2022 09:08:43',
      updated_at: '14/2/2023 06:46:04',
      organization: 2,
      source_types: ['1', '2'],
    },
    {
      id: 158,
      name: 'Think Zone',
      description:
        '<p>Tòa soạn: 11th Floor, Twin Tower, 265 Cầu Giấy, Hà Nội</p><p>Email: <a href="mailto:contact@thinkzone.vn">contact@thinkzone.vn</a></p><p>Phone: (+<a href="tel:+84 24 7100 9999">84) 24 7100 9999</a></p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/jrDwvzYZ1hThinkZone.png',
      created_at: '17/10/2022 13:11:31',
      updated_at: '14/2/2023 06:45:30',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 159,
      name: 'The Leader',
      description:
        '<p>Giấy phép xuất bản báo điện tử số 348/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 19/7/2017 - Cơ quan báo chí của Hội các Nhà quản trị doanh nghiệp Việt Nam (VACD)</p><p>Tòa soạn: Tầng 7, tòa nhà HCMCC số 249A Thụy Khuê, quận Tây Hồ, Hà Nội</p><p>Đường dây nóng: 08887 08817</p><p>Thư điện tử: <a href="mailto:toasoan@theleader.vn">toasoan@theleader.vn</a></p><p>Số ISSN: 2615-921X</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/GoheUUsXf6TheLeader.png',
      created_at: '17/10/2022 14:03:03',
      updated_at: '25/5/2023 05:21:35',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 16,
      name: 'Báo Chính Phủ',
      description:
        '<p>BÁO ĐIỆN TỬ CỦA CHÍNH PHỦ NƯỚC CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM Giấy phép số: 137/GP-BTTTT, cấp ngày 21/04/2014.&nbsp;</p><p>Trụ sở: 16 Lê Hồng Phong - Ba Đình - Hà Nội&nbsp;</p><p>Phone: 080.43162&nbsp;</p><p>Fax: 080.48924&nbsp;</p><p>Email: thongtinchinhphu@chinhphu.vn.</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/mOfYHdPq6UBaoDienTuChinhPhu.png',
      created_at: '23/9/2022 03:48:17',
      updated_at: '14/2/2023 09:13:31',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 160,
      name: 'Tạp chí Doanh nhân Thương hiệu',
      description:
        '<p>Chuyên san Văn hoá - Doanh nhân, diễn đàn ngôn luận của Hiệp hội Doanh nhân kết nối Việt Nam</p><p>Tòa soạn: Tầng 5, Leadvisors Place, 41A Lý Thái Tổ, Hoàn Kiếm, Hà Nội</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/6Hx2L6lL7PBaoDoanhNhan%26ThuongHieu.png',
      created_at: '4/11/2022 17:04:48',
      updated_at: '14/2/2023 06:44:54',
      organization: 5,
      source_types: ['1'],
    },
    {
      id: 161,
      name: 'Tạp chí điện tử Doanh Nhân Trẻ',
      description:
        '<p>Giấy phép báo chí số 551/GP-BTTTT cấp ngày 27/08/2021 - Bản quyền thuộc về Tạp chí Doanh nhân trẻ.</p><p>Tòa soạn: 66 Phan Đình Phùng, phường Quán Thánh, quận Ba Đình, Hà Nội</p><p>Phone: (024) 320 66 279</p><p>Văn phòng phía Nam: 275B Phạm Ngũ Lão, phường Phạm Ngũ Lão, quận 1, TP HCM</p><p>Phone: (028) 6277 1479</p><p>Email: tapchidoanhnhantrevn@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/hsVB_tLwNjDoanhNhanTre.png',
      created_at: '4/11/2022 17:06:22',
      updated_at: '25/5/2023 03:57:10',
      organization: 5,
      source_types: ['2'],
    },
    {
      id: 17,
      name: 'Báo Kiểm Toán Nhà Nước',
      description:
        '<p>Giấy phép số: 98/GP-BTTTT do Bộ thông tin và Truyền thông cấp ngày 07/3/2017.&nbsp;</p><p>Trụ sở: 111 Trần Duy Hưng – Cầu Giấy – Hà Nội&nbsp;</p><p>Hotline: 0967742199&nbsp;</p><p>Email: kiemtoandientu@sav.gov.vn&nbsp;</p><p>Phone: (024) 6282 2176&nbsp;</p><p>Fax: (024) 6282 2191</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/qTHS3h9baFKiemToan.png',
      created_at: '23/9/2022 04:12:31',
      updated_at: '14/2/2023 09:13:09',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 18,
      name: 'Báo Văn Hóa',
      description:
        '<p>Giấy phép Báo điện tử số: 422/GP-BTTTT cấp ngày 19.8.2016 - Bộ Văn hóa, Thể thao và Du lịch</p><p>Tòa soạn: 124 Nguyễn Du, Quận Hai Bà Trưng, Hà Nội&nbsp;</p><p>Phone: 024.38220036 -&nbsp;</p><p>Fax: 024.38229302&nbsp;</p><p>Email: baovanhoa@fpt.vn&nbsp;</p><p>Văn phòng đại diện - TP Hồ Chí Minh&nbsp;</p><p>Phone: 028.38230890&nbsp;</p><p>Address: 170 Nguyễn Đình Chiểu, phường 6, quận 3, TP Hồ Chí Minh</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/pmGqspMqJrVanHoa.png',
      created_at: '23/9/2022 04:16:07',
      updated_at: '14/2/2023 09:12:32',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 19,
      name: 'Báo Bảo vệ Pháp Luật',
      description:
        '<p>Giấy phép số 617/GP-BTTTT cấp ngày 11/12/2017 của Bộ Thông tin và Truyền thông.&nbsp;</p><p>Tòa soạn: Số 9, Phạm Văn Bạch, Cầu Giấy, Hà Nội.&nbsp;</p><p>Điện thoại: (84-24) 39387995&nbsp;</p><p>Thư điện tử: baovephapluat24h@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/U7w8xSCT0QBaoVePhapLuat.png',
      created_at: '23/9/2022 04:20:39',
      updated_at: '14/2/2023 09:10:49',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 2,
      name: 'CafeF',
      description:
        '<p>Giấy phép thiết lập trang thông tin điện tử tổng hợp trên mạng số 2216/GP-TTĐT do Sở Thông tin và Truyền thông Hà Nội cấp ngày 10 tháng 4 năm 2019.&nbsp;</p><p>Tòa soạn: Tầng 21 Tòa nhà Center Building. Số 1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội.&nbsp;</p><p>Điện thoại: 024 7309 5555 Máy lẻ 292.&nbsp;</p><p>Số fax: 024-39744082&nbsp;</p><p>Thư điện tử: info@cafef.vn&nbsp;</p><p>Đường dây nóng: 0926 864 344</p>',
      thumb:
        'https://cinvest-dev-1.s3.amazonaws.com/dev/news_brand/thumbs/30_1661430502325_9cf3d74c_25.jpeg',
      created_at: '25/8/2022 12:28:23',
      updated_at: '11/10/2022 11:55:53',
      organization: 2,
      source_types: ['1', '2'],
    },
    {
      id: 20,
      name: 'Báo Công An Nhân Dân',
      description:
        '<p>Giấy phép hoạt động báo chí số 08/GP-BTTTT, cấp ngày: 05/01/2021 của Bộ thông tin &amp; Truyền thông.&nbsp;</p><p>Trụ sở Tòa soạn: Số 2A Đinh Lễ, Hoàn Kiếm, Hà Nội.&nbsp;</p><p>Phone: 0243.8222157 (máy lẻ 701).&nbsp;</p><p>Hotline: 0971.011944&nbsp;</p><p>Email: candonline@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/CJIHkTRzftCongAnNhanDan.png',
      created_at: '23/9/2022 04:23:34',
      updated_at: '14/2/2023 09:07:16',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 21,
      name: 'Tạp chí Nghiên cứu Khoa học Kiểm toán',
      description:
        '<p>Tạp chí Nghiên cứu khoa học Kiểm toán (Tên tiếng Anh: Journal of Auditing Studies), Tạp chí Nghiên cứu Khoa học kiểm toán là cơ quan thông tin lý luận của Kiểm toán nhà nước, hoạt động theo giấy phép xuất bản số 514/GP-BTTTT cấp ngày 05/10/2015 của Bộ Thông tin và Truyền thông.&nbsp;</p><p>Tòa soạn: 111 Trần Duy Hưng, Trung Hòa, Cầu Giấy, Hà Nội&nbsp;</p><p>Phone: 024 62873463&nbsp;</p><p>Email: khoahockiemtoansav@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/xad-C1wxS3TapChiNghienCuuKhoaHoc.png',
      created_at: '23/9/2022 04:45:12',
      updated_at: '14/2/2023 09:05:11',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 22,
      name: 'Báo Nông Nghiệp',
      description:
        '<p>Giấy phép hoạt động Báo điện tử số: 167/GB - BTTTT. Bộ trưởng Bộ TTTT cấp ngày 20/4/2017&nbsp;</p><p>Tòa soạn: 14 Ngô Quyền - Hoàn Kiếm - Hà Nội</p><p>Phone: 024.38256492&nbsp;</p><p>Fax: 024.38252923&nbsp;</p><p>Email: baonnvn@hn.vnn.vn &amp; baonnvnts@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/q2BYXRvxeUNongNghiepVietNam.png',
      created_at: '23/9/2022 12:49:00',
      updated_at: '14/2/2023 09:04:33',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 23,
      name: 'Báo Sức khỏe & Đời sống',
      description:
        '<p>Giấy phép hoạt động báo chí số 390/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 25/06/2021 © Bản quyền thuộc Báo điện tử Sức khỏe và Đời sống - Cơ quan ngôn luận của Bộ Y tế.&nbsp;</p><p>Trụ sở chính: Số 138A Giảng Võ - Quận Ba Đình - Thành phố Hà Nội&nbsp;</p><p>Phone: 024.3846.1042&nbsp;</p><p>Fax: 024.3844.3144&nbsp;</p><p>Hotline: 0904.852.222&nbsp;</p><p>Email: toasoan@suckhoedoisong.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/4rYp9IVPBoSucKhoe%26DoiSong.png',
      created_at: '23/9/2022 12:51:27',
      updated_at: '14/2/2023 09:04:23',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 24,
      name: 'Tạp chí Bảo hiểm xã hội',
      description:
        '<p>Tạp chí điện tử Bảo hiểm xã hội: Giấy phép xuất bản số 405/GP-BTTTT, do Bộ Thông tin và Truyền thông cấp ngày 23/9/2020&nbsp;</p><p>Tòa soạn: 150 Phố Vọng, Thanh Xuân, Hà Nội&nbsp;</p><p>Tel: (024) 36281191&nbsp;</p><p>Fax: (024) 36281540&nbsp;</p><p>Email: tapchibhxh@vss.gov.vn&nbsp;</p><p>Ðại diện Tạp chí Bảo hiểm xã hội tại TP.HCM: 18D Cộng Hòa, Phường 4, Quận Tân Bình&nbsp;</p><p>Tel: 0834102200.</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/qzOuloKl23BaoHiemXaHoi.png',
      created_at: '23/9/2022 12:54:56',
      updated_at: '14/2/2023 09:04:12',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 25,
      name: 'Tạp chí Khoa học Nông Nghiệp',
      description:
        '<p>Giấy phép xuất bản Số 32/GP-TTĐT do Cục Phát thanh, truyền hình và TTĐT - Bộ TT và TT cấp ngày 21/4/2015&nbsp;</p><p>Tòa soạn: Số 10 Nguyễn Công Hoan - Ba Đình - Hà Nội&nbsp;</p><p>Phone: 024.32321808 - 024.37711072&nbsp;</p><p>Fax: 024.37711073</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/HjwJRkthfFTapChiKhoaHocjNongNghiep.png',
      created_at: '23/9/2022 12:59:04',
      updated_at: '14/2/2023 09:03:52',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 26,
      name: 'Báo Thanh tra Việt Nam',
      description:
        '<p>Giấy phép hoạt động báo chí số 599/GP-BTTTT, ngày 30/12/2016&nbsp;</p><p>Tòa soạn: Số 220 Đội Cấn, Ba Đình, Hà Nội&nbsp;</p><p>Hotline: 0912398529 - 0988555629&nbsp;</p><p>Phone: 080.49073&nbsp;</p><p>Fax: 080.49065&nbsp;</p><p>Email: tapchithanhtrabbt@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/O7xN03iFqZThanhTraVietNam.png',
      created_at: '23/9/2022 13:01:36',
      updated_at: '14/2/2023 09:02:43',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 27,
      name: 'Tạp chí Tài nguyên và Môi trường',
      description:
        '<p>Giấy phép hoạt động báo chí số: 480 /GP-BTTTT, Bộ TT&amp;TT cấp ngày 27 tháng 7 năm 2021&nbsp;</p><p>Tòa soạn: Tầng 5, Lô E2, KĐT Cầu Giấy, phố Dương Đình Nghệ, phường Yên Hòa, quận Cầu Giấy, Hà Nội&nbsp;</p><p>Phone: 024 37733419&nbsp;</p><p>Hotline: 0913328166&nbsp;</p><p>Email: tnmtdientu@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/_cgifud5R3TaiNguyen%26MoiTruong.png',
      created_at: '23/9/2022 13:04:18',
      updated_at: '14/2/2023 09:02:26',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 28,
      name: 'Báo Dân sinh',
      description:
        '<p>Giấy phép hoạt động báo điện tử số 419/BTTTT cấp ngày 18/8/2016&nbsp;</p><p>Tòa soạn: Tầng 9, tòa nhà liên cơ quan Bộ LĐ-TB&amp;XH, Lô D25, số 3 ngõ 7 Tôn Thất Thuyết, P. Dịch Vọng Hậu, Q. Cầu Giấy, TP Hà Nội.&nbsp;</p><p>Ban Phóng viên: (024) 38356759&nbsp;</p><p>Ban Thư ký toà soạn: (024) 38356756&nbsp;</p><p>Hotline: 0981 276 789&nbsp;</p><p>Email: baodtdansinh@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/kfQWDzWECrDanSinh.png',
      created_at: '23/9/2022 13:06:16',
      updated_at: '14/2/2023 09:02:12',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 29,
      name: 'Báo Dân tộc và Phát triển',
      description:
        '<p>Cơ quan ngôn luận của Ủy ban Dân tộc - Diễn đàn của đồng bào các dân tộc Việt Nam Giấy phép hoạt động báo chí số 468/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 26/10/2020.&nbsp;</p><p>Tòa soạn: Số 349 Đội Cấn, Ba Đình, Hà Nội&nbsp;</p><p>Phone: 0243.839.8987&nbsp;</p><p>Fax: 024.3767.4765&nbsp;</p><p>Email: baodtpt@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/fZKhPk6-2-DanToc%26PhatTrien.png',
      created_at: '23/9/2022 13:09:28',
      updated_at: '14/2/2023 09:01:57',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 3,
      name: 'Dân Trí',
      description:
        '<p>Cơ quan của Bộ Lao động - Thương binh và Xã hội Giấy phép hoạt động báo điện tử Dân trí số 298/GP - BTTTT Hà Nội, ngày 14-07-2020.&nbsp;</p><p>Tòa soạn: Nhà 48, ngõ 2 Giảng Võ, Cát Linh, Đống Đa, Hà Nội&nbsp;</p><p>Văn phòng đại diện miền Nam: 51 Võ Văn Tần, Phường Võ Thị Sáu, Quận 3, TP.HCM&nbsp;</p><p>Phone: 024-3736-6491.&nbsp;</p><p>Fax: 024-3736-6491&nbsp;</p><p>Hotline HN: 0973-567-567 - TP HCM: 0974-567-567&nbsp;</p><p>Email: info@dantri.com.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/nhve3RBxBeDanTri.png',
      created_at: '25/8/2022 12:49:09',
      updated_at: '14/2/2023 09:17:01',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 30,
      name: 'Báo Đấu thầu',
      description:
        '<p>Giấy phép hoạt động báo điện tử số 289/GP-BTTTT của Bộ Thông tin và Truyền thông cấp ngày 10/06/2022&nbsp;</p><p>Hotline: 024.3.7686611&nbsp;</p><p>Phone: 024.3768.8833</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/IFmCRB53AZDauThau.png',
      created_at: '23/9/2022 13:12:47',
      updated_at: '14/2/2023 09:01:30',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 31,
      name: 'Báo Giao thông',
      description:
        '<p>Giấy phép số 05/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 13/01/2015.&nbsp;</p><p>Tòa soạn: Số 2, Nguyễn Công Hoan, Ba Đình, Hà Nội&nbsp;</p><p>Hotline: 0901 514 799&nbsp;</p><p>Tel: (024) 39.382.124&nbsp;</p><p>Fax: (04) 39.382.125&nbsp;</p><p>Email: bandoc@baogiaothong.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/lH5McWtQXTGiaoThong.png',
      created_at: '23/9/2022 13:15:25',
      updated_at: '14/2/2023 09:01:18',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 32,
      name: 'Báo Hải quân Việt Nam',
      description:
        '<p>Giấy phép số 288/GP-BTTTT 10-6-2022&nbsp;</p><p>Tòa soạn: Số 3B Trần Hưng Đạo, quận Hồng Bàng, thành phố Hải Phòng&nbsp;</p><p>Phone: 069815562 - 02253747490&nbsp;</p><p>Fax: 02253747490&nbsp;</p><p>Email: bhqdt@baohaiquanvietnam.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/HwZ7ljXMiWHaiQuanVietNam.png',
      created_at: '23/9/2022 13:17:35',
      updated_at: '14/2/2023 09:01:02',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 33,
      name: 'Báo Pháp luật Việt Nam',
      description: '<p>Thuộc cơ quan của Bộ Tư pháp Việt Nam</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/lW-_-EZreePhapLuatVietNam.png',
      created_at: '23/9/2022 13:23:07',
      updated_at: '14/2/2023 09:00:48',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 34,
      name: 'Báo Thế giới và Việt Nam',
      description:
        '<p>Giấy phép số 196/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 15/4/2016 thuộc cơ quan báo chí của Bộ Ngoại giao&nbsp;</p><p>Tòa soạn: Số 6 Chu Văn An, Ba Đình, Hà Nội.&nbsp;</p><p>Phone: 84-24-3799.3506&nbsp;</p><p>Hotline: 0879553979&nbsp;</p><p>Fax: 84-24-38234169&nbsp;</p><p>Email: baoquocte2016@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/2gIRjTvPnLTheGioi%26VietNam.png',
      created_at: '23/9/2022 13:25:37',
      updated_at: '14/2/2023 09:00:35',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 35,
      name: 'Báo Tài nguyên & Môi trường',
      description:
        '<p>Giấy phép xuất bản số 100/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 18/02/2022&nbsp;</p><p>Trụ sở: Lô E2, Khu Đô thị mới Cầu Giấy, đường Dương Đình Nghệ, phường Yên Hòa, quận Cầu Giấy, Tp. Hà Nội&nbsp;</p><p>Phone: 024.37738729&nbsp;</p><p>Fax: 024.37823995&nbsp;</p><p>Email: tnmtonline@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/Z9ZFq_LF0iTaiNguyen%26MoiTruong.png',
      created_at: '23/9/2022 13:28:39',
      updated_at: '14/2/2023 08:57:16',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 36,
      name: 'Báo Thông tấn Xã Việt Nam',
      description:
        '<p>Giấy phép số 173/GP-BTTTT cấp ngày 04/4/2022 © Bản quyền thuộc về Báo Tin tức - TTXVN Tòa soạn: Số 5 Lý Thường Kiệt, Hà Nội Phone: 024.38248605 Fax: 024-38253753 Email: baotintuc@vnanet.vn – toasoantintuc@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.amazonaws.com/dev/news_brand/thumbs/30_1663939983775_186a8e2f_25.png',
      created_at: '23/9/2022 13:33:04',
      updated_at: '11/10/2022 11:52:35',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 37,
      name: 'Báo Xây dựng',
      description:
        '<p>Giấy phép: Số 400/GP-BTTTT ngày 8/8/2022 - Cơ quan chủ quản: Bộ Xây dựng&nbsp;</p><p>Toà soạn: 37 Lê Đại Hành, Hai Bà Trưng, Hà Nội&nbsp;</p><p>Hotline: 0945.40.6866&nbsp;</p><p>Email: lienhebxd@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.amazonaws.com/dev/news_brand/thumbs/30_1663940120465_b15c6202_25.png',
      created_at: '23/9/2022 13:35:20',
      updated_at: '11/10/2022 11:55:08',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 38,
      name: 'Báo Công Lý',
      description:
        '<p>Giấy phép số 52/GP- BTTTT do Bộ Thông tin và Truyền thông cấp - Cơ quan của Tòa án Nhân dân tối cao.&nbsp;</p><p>Trụ sở Tòa soạn: 48 Lý Thường Kiệt, quận Hoàn Kiếm, TP Hà Nội&nbsp;</p><p>Hotline: 0912 532 315&nbsp;</p><p>Email: conglydientu@congly.vn&nbsp;</p><p>Phone: 024.3824.7204 - 0243.7379.192&nbsp;</p><p>Fax: 0243.9360.062&nbsp;</p><p>VĂN PHÒNG ĐẠI DIỆN PHÍA NAM: 124 Nam Kỳ Khởi Nghĩa, phường Bến Nghé, Quận 1, TP.HCM.&nbsp;</p><p>Phone: 0886.600.669</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/YHq35nnbQCCongLy.png',
      created_at: '23/9/2022 13:37:23',
      updated_at: '14/2/2023 08:58:29',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 39,
      name: 'Báo Công thương',
      description:
        '<p>® Giấy phép hoạt động Báo điện tử số 456/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 18/11/2013 - Cơ quan ngôn luận của Bộ Công thương&nbsp;</p><p>Tòa soạn: Tầng 10-11, Tòa nhà Bộ Công Thương số 655 Phạm Văn Đồng, Bắc Từ Liêm, Hà Nội.&nbsp;</p><p>Hotline: 0866.59.4498&nbsp;</p><p>Tel: 0243.936.6400&nbsp;</p><p>Fax: 0243.936.6402&nbsp;</p><p>Email: baodientubct@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/fWt-4hjQ2gCongThuong.png',
      created_at: '23/9/2022 13:40:09',
      updated_at: '14/2/2023 08:58:40',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 4,
      name: 'Báo Đầu Tư',
      description:
        '<p>Cơ quan của Bộ Kế hoạch và Đầu tư. Giấy phép số 541/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 23 tháng 8 năm 2021.&nbsp;</p><p>Tòa soạn: 47 Quán Thánh, Ba Đình, Hà Nội&nbsp;</p><p>Phone: 0243.845.0537&nbsp;</p><p>Fax: 0243.823.5281&nbsp;</p><p>Email: baodautu.vn@vir.com.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/WkJAlVvbGJDauTuOnline.png',
      created_at: '25/8/2022 14:42:35',
      updated_at: '14/2/2023 09:16:51',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 40,
      name: 'Báo Đại biểu Nhân dân',
      description:
        '<p>Giấp phép số 392/GP_BTTTT Cấp ngày 20/09/2013 - Cơ quan chủ quản: Văn phòng Quốc hội&nbsp;</p><p>Trụ sở tòa soạn: 35 Ngô Quyền, Hoàn Kiếm, Hà Nội&nbsp;</p><p>Phone: (084)08046090 - (084)08046231 - (084)08046012.&nbsp;</p><p>Fax: (84) 08046659.&nbsp;</p><p>Email: toasoan@dbnd.vn, baodientu@dbnd.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/KI02taM9JrDaiBieuNhanDan.png',
      created_at: '23/9/2022 13:42:45',
      updated_at: '14/2/2023 08:58:52',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 41,
      name: 'Báo ảnh Dân tộc và Miền núi',
      description:
        '<p>Giấy phép xuất bản số: 226/GP-TTĐT do Cục Phát thanh, Truyền hình và Thông tin điện tử cấp ngày 25 tháng 11 năm 2019&nbsp;</p><p>Trụ sở: Số 5 Lý Thường Kiệt, Hoàn Kiếm - Hà Nội&nbsp;</p><p>ĐT: 024.39330336&nbsp;</p><p>Số fax: 024.38262185&nbsp;</p><p>Thư điện tử: baoanhdantocmiennui@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/X9RmMdcHCZDanToc%26MienNui.png',
      created_at: '23/9/2022 13:44:20',
      updated_at: '14/2/2023 08:59:01',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 42,
      name: 'Báo Giáo dục và Thời đại',
      description:
        '<p>Số giấy phép 479/GP-BTTTT, cấp ngày 29/10/2020, ISSN 1859-2945 - Cơ quan chủ quản: BỘ GIÁO DỤC VÀ ĐÀO TẠO&nbsp;</p><p>Tòa soạn: 15 - Hai Bà Trưng - Q.Hoàn Kiếm - Hà Nội.&nbsp;</p><p>Điện thoại: 024 3936 9800&nbsp;</p><p>Thư điện tử: gdtddientu@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/8ZojV1s4T_GiaoDuc%26ThoiDai.png',
      created_at: '23/9/2022 13:49:03',
      updated_at: '14/2/2023 08:59:15',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 43,
      name: 'Báo Hải quan Online',
      description:
        '<p>Giấy phép số: 459/GP-BTTTT ngày 22/10/2020 của Bộ Thông tin và Truyền thông - Cơ quan của Tổng cục Hải quan&nbsp;</p><p>Tòa soạn: Số 9 phố Dương Đình Nghệ, Phường Yên Hòa, Quận Cầu Giấy, TP.Hà Nội&nbsp;</p><p>Hotline: 0968.96.34.96&nbsp;</p><p>Email: haiquanonline@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/uPDiZFK_jTHaiQuanOnline.png',
      created_at: '23/9/2022 13:50:56',
      updated_at: '14/2/2023 08:59:26',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 44,
      name: 'Tạp chí ICT Việt Nam',
      description:
        '<p>Giấy phép số 317/GP-BTTTT cấp ngày 20/8/2018 - Cơ quan ngôn luận của Bộ Thông tin và Truyền thông&nbsp;</p><p>Tòa soạn: Tầng 5, tòa nhà 115, Trần Duy Hưng, Hà Nội&nbsp;</p><p>Phone: 024. 37737136&nbsp;</p><p>Fax: 024. 37737137&nbsp;</p><p>Email: tapchitttt@mic.gov.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/S7kjams92hThongTin%26TruyenThong.png',
      created_at: '23/9/2022 13:54:26',
      updated_at: '14/2/2023 09:00:20',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 45,
      name: 'Báo Kiểm sát điện tử',
      description:
        '<p>Giấy phép hoạt động báo chí điện tử số 326/GP-BTTTT cấp ngày 29/7/2020 - © CƠ QUAN CỦA VIỆN KIỂM SÁT NHÂN DÂN TỐI CAO&nbsp;</p><p>Tòa soạn: 09 Phạm Văn Bạch, phường Yên Hòa, quận Cầu Giấy, Hà Nội&nbsp;</p><p>Hotline: 0819.383.555&nbsp;</p><p>Email: tuyentruyen@kiemsat.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/pN4GvljtAEKiemSat.png',
      created_at: '23/9/2022 13:58:20',
      updated_at: '14/2/2023 08:57:01',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 46,
      name: 'Tạp chí Kinh tế và Dự báo',
      description:
        '<p>GPXB: 1667/GP-BTTTT, ngày 12/09/2012 - Cơ quan của Bộ Kế hoạch và Đầu tư&nbsp;</p><p>Tòa soạn: 65, Văn Miếu, Đống Đa, Hà Nội&nbsp;</p><p>Hotline: 0974050599&nbsp;</p><p>Email: kinhtedubao@mpi.gov.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/qCEEcGiZhZKinhTe%26DuBao.png',
      created_at: '23/9/2022 16:27:38',
      updated_at: '14/2/2023 08:56:22',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 47,
      name: 'Tạp chí Quản lý thị trường',
      description:
        '<p>Giấy phép hoạt động tạp chí điện tử số: 260/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 12/5/2021 – Cơ quan ngôn luận của Tổng cục Quản lý thị trường&nbsp;</p><p>Tòa soạn: 91 Đinh Tiên Hoàng, Hoàn Kiếm, Hà Nội&nbsp;</p><p>Phone: 0243.936.2303</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/ce5FrEIQpzQuanLyThiTruong.png',
      created_at: '23/9/2022 16:30:16',
      updated_at: '14/2/2023 08:56:09',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 48,
      name: 'Tạp chí Công thương',
      description:
        '<p>Giấy phép hoạt động Báo Điện Tử số 232/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 23/5/2017 - CƠ QUAN THÔNG TIN LÝ LUẬN CỦA BỘ CÔNG THƯƠNG&nbsp;</p><p>Tòa soạn: Tầng 8, Tòa nhà Bộ Công Thương, 655 Phạm Văn Đồng, Bắc Từ Liêm, Hà Nội.&nbsp;</p><p>Phone: 024.22218238&nbsp;</p><p>Email: tapchicongthuong.moit@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/uHk1lB5BtyCongThuongIndustry.png',
      created_at: '23/9/2022 16:32:05',
      updated_at: '14/2/2023 08:55:57',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 49,
      name: 'Tạp chí Giáo dục',
      description:
        '<p>Giấy phép số: 20/GP‒TTĐT do Bộ Thông tin và Truyền thông cấp ngày 26/01/2021 - Cơ quan chủ quản: BỘ GIÁO DỤC VÀ ĐÀO TẠO&nbsp;</p><p>Tòa soạn: Số 4 Trịnh Hoài Đức, phường Cát Linh, quận Đống Đa, Hà Nội&nbsp;</p><p>Phone: (+84)2462598109&nbsp;</p><p>Fax: (+84)2462598109&nbsp;</p><p>Email: tapchigiaoduc@moet.gov.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/be8UIzjjW4TapChiGiaoDuc.png',
      created_at: '23/9/2022 16:34:09',
      updated_at: '14/2/2023 08:54:40',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 5,
      name: 'CafeBiz',
      description:
        '<p>Giấy phép thiết lập trang thông tin điện tử tổng hợp trên internet số 3321/GP-TTĐT do Sở Thông tin và Truyền thông TP Hà Nội cấp ngày 03 tháng 07 năm 2019.&nbsp;</p><p>Tòa soạn: Tầng 21, tòa nhà Center Building. Số 1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội.&nbsp;</p><p>Điện thoại: 024 7309 5555 - Máy lẻ 41294</p><p>Số fax: 024-39743413&nbsp;</p><p>Thư điện tử: info@vccorp.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/-O-s9zo1oTCafeBiz.png',
      created_at: '23/9/2022 02:49:42',
      updated_at: '14/2/2023 09:16:21',
      organization: 2,
      source_types: ['1', '2'],
    },
    {
      id: 50,
      name: 'Tạp chí Giao thông vận tải',
      description:
        '<p>Giấy phép hoạt động số: 499/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 10/11/2016 - Cơ quan thông tin của Bộ Giao thông vận tải&nbsp;</p><p>Toà soạn: Số 106 Thái Thịnh - Đống Đa - Hà Nội&nbsp;</p><p>Hotline: 0902 202 229&nbsp;</p><p>Fax: (84-24) 3.822.1153&nbsp;</p><p>Email: tapchigtvt@mt.gov.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/yjh9j4nMP2TapChiGiaoThong.png',
      created_at: '23/9/2022 16:37:17',
      updated_at: '14/2/2023 08:54:27',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 51,
      name: 'Tạp chí Ngân Hàng',
      description:
        '<p>Giấy phép hoạt động Tạp chí in và Tạp chí điện tử số 484/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 28/07/2021 - Cơ quan của Ngân hàng Nhà nước&nbsp;</p><p>Tòa soạn: Số 64 Nguyễn Chí Thanh, Phường Láng Thượng, Quận Đống Đa, Hà Nội&nbsp;</p><p>Phone: 024.36368618 - 024.39392184 - 024.39392187&nbsp;</p><p>Email: tapchidientu_tcnh@sbv.gov.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/AL4lJYGkvpTapChiNganHang.png',
      created_at: '23/9/2022 16:48:12',
      updated_at: '14/2/2023 08:53:52',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 52,
      name: 'Tạp chí Tài chính',
      description:
        '<p>Giấy phép số 552/GP-BTTTT ngày 27/8/2021 của Bộ Thông tin và Truyền thông - Cơ quan chủ quản: Bộ Tài chính&nbsp;</p><p>Tòa soạn: Tầng 4, Tòa nhà dự án, số 4, ngõ Hàng Chuối 1, quận Hai Bà Trưng, TP. Hà Nội&nbsp;</p><p>Tel: 024.39330038, 028.39300434&nbsp;</p><p>Hotline: 0987 828 585&nbsp;</p><p>Email: tapchitaichinhdientu@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/AJ6jjKElKmTaiChinh.png',
      created_at: '23/9/2022 16:54:04',
      updated_at: '14/2/2023 08:53:17',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 53,
      name: 'Tạp chí Tòa án Nhân dân',
      description:
        '<p>Số giấy phép: 425/GP-BTTTT cấp ngày 07/9/2017 - CƠ QUAN CỦA TÒA ÁN NHÂN DÂN TỐI CAO&nbsp;</p><p>Tòa soạn: Số 2 Nguyễn Trãi, Quận Hà Đông, Thành phố Hà Nội</p><p>PVTT phía Nam: 124 Nam Kỳ Khởi Nghĩa, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh.&nbsp;</p><p>Hotline: 090.328.3333&nbsp;</p><p>Phone: 024 33828 938&nbsp;</p><p>Fax: 024 39362 750&nbsp;</p><p>Email: tctoaan.dt@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/N0p5GA1-XZToaAnNhanDan.png',
      created_at: '23/9/2022 16:56:04',
      updated_at: '14/2/2023 08:53:01',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 54,
      name: 'Tạp chí Xây dựng',
      description:
        '<p>TẠP CHÍ XÂY DỰNG - ISSN 2734-9888 Giấy phép: Số 728/GP-BTTTT, Bộ Thông tin và Truyền thông cấp ngày 10/11/2021 - Cơ quan chủ quản: Bộ Xây dựng&nbsp;</p><p>Tòa soạn: 37 Lê Đại Hành, Quận Hai Bà Trưng, TP Hà Nội.&nbsp;</p><p>Phone: 0243 974 0744&nbsp;</p><p>Email: bandientu@tapchixaydung.vn - toasoan@tapchixaydung.vn.</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/ivgXY2KFQbXayDung.png',
      created_at: '23/9/2022 17:00:26',
      updated_at: '14/2/2023 08:52:39',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 55,
      name: 'Tạp chí Tổ chức Nhà nước',
      description:
        '<p>Giấy phép hoạt động: số 427/GP-BTTTT ngày 08/7/2021 của Bộ Thông tin và Truyền thông - Cơ quan của Bộ Nội vụ&nbsp;</p><p>Trụ sở tòa soạn: Số 8 Tôn Thất Thuyết, phường Mỹ Đình 2, quận Nam Từ Liêm, Hà Nội&nbsp;</p><p>Phone: 080 48575&nbsp;</p><p>Email: Tapchitcnn@moha.gov.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/e9ECsE00vRTapChiToChucNhaNuoc.png',
      created_at: '23/9/2022 17:04:31',
      updated_at: '14/2/2023 08:52:22',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 56,
      name: 'Báo điện tử Thanh tra',
      description:
        '<p>Giấy phép hoạt động báo chí điện tử số: 343 / GP-BTTTT Cấp ngày: 24/07/2015; Nơi cấp: Bộ Thông tin - Truyền thông CƠ QUAN CHỦ QUẢN: THANH TRA CHÍNH PHỦ&nbsp;</p><p>Tòa soạn: 100 Tô Hiệu, Hà Đông, Hà Nội.&nbsp;</p><p>Hotline: 085.55.00.444&nbsp;</p><p>Phone:(+84)24 3728 - 1341 / (+84)24 3728 - 1342&nbsp;</p><p>Fax: (+84)24 3728 - 1338&nbsp;</p><p>Email: thukybtt@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/sAuJDdpo3cThanhTra.png',
      created_at: '23/9/2022 17:06:45',
      updated_at: '14/2/2023 08:52:03',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 57,
      name: 'Báo Thể thao & Văn hóa',
      description:
        '<p>Giấy phép số 321/GP-BTTTT ngày 15/06/2016 do Bộ TT&amp;TT cấp&nbsp;</p><p>Tòa soạn: 11 Trần Hưng Đạo - Hoàn Kiếm - Hà Nội&nbsp;</p><p>Phone: 024.39331878&nbsp;</p><p>Fax: 024.38248600&nbsp;</p><p>Email: toasoan@thethaovanhoa.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/DvxWqTOQiDTheThao%26VanHoa.png',
      created_at: '23/9/2022 17:08:44',
      updated_at: '14/2/2023 08:51:46',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 58,
      name: 'Thời báo Ngân hàng',
      description:
        '<p>Giấy phép số: 601/ GP - BTTTT ngày 30/12/2016 - Cơ quan của Ngân hàng Nhà nước Việt Nam&nbsp;</p><p>Tòa soạn: Tòa nhà Ngân hàng Nhà nước Việt Nam, số 504 Xã Đàn (tầng 8), Phường Nam Đồng, Quận Đống Đa, Thành phố Hà Nội.&nbsp;</p><p>Phone: 02437163923&nbsp;</p><p>Fax: 02437163921&nbsp;</p><p>Email: toasoan@thoibaonganhang.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/5vWcVsv5CtThoiBaoNganHang.png',
      created_at: '24/9/2022 08:11:50',
      updated_at: '14/2/2023 08:51:29',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 59,
      name: 'Thời báo Tài chính Việt Nam',
      description:
        '<p>Giấy phép báo điện tử: 160/GP-BTTTT - Cơ quan chủ quản: Bộ Tài chính&nbsp;</p><p>Tòa soạn: 34 Tuệ Tĩnh, phường Nguyễn Du, quận Hai Bà Trưng, TP Hà Nội&nbsp;</p><p>Email: thoibaotaichinh@mof.gov.vn; tbtcvn@gmail.com; toasoanbaotaichinh@gmail.com&nbsp;</p><p>Fax: 0243.9431632&nbsp;</p><p>Hotline: 0243.9430420 (máy lẻ: Phòng Thư ký: 25; Phòng Phóng viên: 38; Phòng Truyền thông tài chính: 16; Phòng Trị sự: 33)</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/C3njYwOONrThoiBaoTaiChinh.png',
      created_at: '24/9/2022 08:13:39',
      updated_at: '14/2/2023 08:50:51',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 6,
      name: 'Genk',
      description:
        '<p>Giấy phép thiết lập trang thông tin điện tử tổng hợp trên mạng số 460/GP-TTĐT do Sở Thông tin và Truyền thông Hà Nội cấp ngày 03/02/2016&nbsp;</p><p>Tòa soạn Hà Nội: Tầng 20, Tòa nhà Center Building - Hapulico Complex, Số 1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội.&nbsp;</p><p>Email: info@genk.vn&nbsp;</p><p>Phone: 024.73095555, máy lẻ 62374&nbsp;</p><p>VPĐD tại TP.HCM: Tầng 4, Tòa nhà 123 Võ Văn Tần, Phường 6, Quận 3, Tp. Hồ Chí Minh</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/9UDN6desvEGenk.png',
      created_at: '23/9/2022 03:03:54',
      updated_at: '14/2/2023 09:16:09',
      organization: 2,
      source_types: ['1', '2'],
    },
    {
      id: 60,
      name: 'Tạp chí Thuế nhà nước',
      description:
        '<p>Giấy phép số 339/GP-BTTTT ngày 09/06/2021 của Bộ Thông tin &amp; Truyền thông - Cơ quan của tổng cục Thuế - Bộ Tài chính&nbsp;</p><p>Tòa soạn: 123 Lò Đúc, phường Đống Mác, quận Hai Bà Trưng, TP Hà Nội.&nbsp;</p><p>Phone: 0243.512.1195&nbsp;</p><p>Email: tapchithue@gdt.gov.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/deEkLgXLU1ThueNhaNuoc.png',
      created_at: '24/9/2022 08:15:52',
      updated_at: '14/2/2023 08:48:11',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 61,
      name: 'Báo Tổ quốc',
      description:
        '<p>Giấy phép hoạt động Báo điện tử số 220/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 29/04/2016 (cấp lại) - Cơ quan chủ quản: Bộ Văn hoá, Thể thao và Du lịch&nbsp;</p><p>Toà soạn: Số 20 ngõ 2, phố Hoa Lư, quận Hai Bà Trưng, Hà Nội.&nbsp;</p><p>Phone: 024.3 9745846/47 (máy lẻ 402) /024.3 9742817&nbsp;</p><p>Hotline: 0901.22.33.66&nbsp;</p><p>Email: toasoan@toquoc.gov.vn&nbsp;</p><p>Văn phòng TP Hồ Chí Minh 170 Nguyễn Đình Chiểu, phường 6, quận 3, TP HCM&nbsp;</p><p>Văn phòng Miền Trung Tầng L, tòa nhà số 01 An Nhơn 07, phường An Hải Bắc, quận Sơn Trà, TP Đà Nẵng</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/kYrWWtFpx6ToQuoc.png',
      created_at: '24/9/2022 08:17:49',
      updated_at: '14/2/2023 08:46:13',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 62,
      name: 'Báo ảnh Việt Nam',
      description:
        '<p>Nhà cung cấp thông tin(ICP): Thông tấn xã Việt Nam | ISSN : 1606 - 0261 Giấy phép số 137/GP-BTTTT cấp ngày 17/03/2022 - Cơ quan chủ quản: Thông tấn xã Việt Nam&nbsp;</p><p>Tòa soạn: 79 Lý Thường Kiệt - Hà Nội&nbsp;</p><p>ĐT: (84-24) 39332300&nbsp;</p><p>Số fax: (84-24) 3933 2291&nbsp;</p><p>Thư điện tử: vietnamvnp@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/rM0K4ioRWFBaoAnhVietNam.png',
      created_at: '24/9/2022 08:19:43',
      updated_at: '14/2/2023 08:45:44',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 63,
      name: 'Vietnam Plus',
      description:
        '<p>Giấy phép số: 1374/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 11/9/2008 - Cơ quan chủ quản: TTXVN&nbsp;</p><p>Phone: (024) 39411349 - (024) 39411348&nbsp;</p><p>Fax: (024) 39411348&nbsp;</p><p>Email: vietnamplus2008@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/nlzVgIpBMrVietNamPlus.png',
      created_at: '24/9/2022 08:23:53',
      updated_at: '14/2/2023 08:45:23',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 64,
      name: 'VietQ',
      description:
        '<p>Giấy phép hoạt động báo chí điện tử số: 656/GP-BTTTT ngày 31 tháng 12 năm 2020 - Cơ quan chủ quản: Tổng cục Tiêu chuẩn Đo lường Chất lượng - Bộ Khoa học &amp; Công nghệ&nbsp;</p><p>Tòa soạn: Số 8 Hoàng Quốc Việt, Cầu Giấy, Hà Nội&nbsp;</p><p>Tel:0963.806.677&nbsp;</p><p>Fax:024.37567804&nbsp;</p><p>Email: toasoan@vietq.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/ecOeBrcSBAVietQ.png',
      created_at: '24/9/2022 08:25:37',
      updated_at: '14/2/2023 08:45:13',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 65,
      name: 'Tạp chí Khoa học và Công nghệ Việt Nam',
      description:
        '<p>Giấy phép số 459/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 20/7/2021 - Cơ quan ngôn luận - lý luận của bộ Khoa học và Công nghệ&nbsp;</p><p>Tòa soạn: 113 Trần Duy Hưng, Phường Trung Hòa, Quận Cầu Giấy, Hà Nội&nbsp;</p><p>Tel: +84 24 39436793&nbsp;</p><p>Fax: +84 24 39436794&nbsp;</p><p>Email: khoahocvacongnghevietnam@most.gov.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/TNJDXf_zgaKhoaHocCongNgheVietNam.png',
      created_at: '24/9/2022 08:27:34',
      updated_at: '14/2/2023 08:44:56',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 66,
      name: 'VOV',
      description:
        '<p>Giấy phép báo Điện tử VOV số 564/GP-BTTTT của Bộ Thông tin &amp; Truyền thông cấp ngày 13/12/2016 - Cơ quan chủ quản: ĐÀI TIẾNG NÓI VIỆT NAM&nbsp;</p><p>Tòa soạn: 37 Bà Triệu, Hoàn Kiếm, Hà Nội, Việt Nam&nbsp;</p><p>Phone: 84-24-22105148 Fax: 84-24-39344230&nbsp;</p><p>Email: toasoanvov.vn@gmail.com | toasoan@vovnews.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/_-_KLDK0oCVOV.png',
      created_at: '24/9/2022 08:34:14',
      updated_at: '14/2/2023 08:44:35',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 67,
      name: 'VTC News',
      description:
        '<p>GIẤY PHÉP CẤP LẠI SỐ 268/GP-BTTTT NGÀY 11/07/2013 - Cơ quan chủ quản: Đài Truyền hình KTS VTC&nbsp;</p><p>Hotline: 0855.911.911</p><p>Email: toasoan@vtc.gov.vn&nbsp;</p><p>TRỤ SỞ CHÍNH Tầng 12A, Tòa nhà 18 Tam Trinh, Hai Bà Trưng, Hà Nội.&nbsp;</p><p>Phone: 024.3632 1588&nbsp;</p><p>Fax: 024.3632 1582&nbsp;</p><p>VĂN PHÒNG ĐẠI DIỆN KHU VỰC PHÍA NAM Lầu 10, tòa nhà VOV, số 7, đường Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, TP.HCM.&nbsp;</p><p>Phone: 028.3811 1705&nbsp;</p><p>Hotline: 094.884.8186&nbsp;</p><p>Email: vpphianam@vtc.gov.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/_q-WexzctiVTCNews.png',
      created_at: '24/9/2022 08:37:21',
      updated_at: '14/2/2023 08:44:25',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 68,
      name: 'VTV News',
      description:
        '<p>Giấy phép hoạt động báo chí điện tử số 306/GP-BTTTT cấp ngày 22/02/2012. CƠ QUAN CHỦ QUẢN: ĐÀI TRUYỀN HÌNH VIỆT NAM / CƠ QUAN BÁO CHÍ: BÁO ĐIỆN TỬ VTV NEWS&nbsp;</p><p>Hotline VTV: (024) 3.8355931; (024) 3.8355932&nbsp;</p><p>Phone Báo điện tử VTV: (024) 66897 897&nbsp;</p><p>Email: toasoan@vtv.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/CCszNSuaw8VTVNews.png',
      created_at: '24/9/2022 08:40:27',
      updated_at: '14/2/2023 08:44:14',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 69,
      name: 'Báo Quân đội nhân dân',
      description:
        '<p>Giấy phép số: 259/GP - BTTTT ngày 12-5-2021 - Cơ quan của Quân ủy Trung Ưuơng và Bộ Quốc phòng, tiếng nói của lực lượng vũ trang và nhân dân Việt Nam&nbsp;</p><p>Toà soạn: Số 7 Phan Đình Phùng, Hà Nội&nbsp;</p><p>Phone: (84 - 24) 3747 1748 / 3747 1029&nbsp;</p><p>Fax : (84 - 24) 3747 4913&nbsp;</p><p>Email : dientu@qdnd.vn; dientubqd@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/9lrlQXSU9dQuanDoiNhanDan.png',
      created_at: '24/9/2022 08:45:20',
      updated_at: '14/2/2023 08:43:58',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 7,
      name: 'Forbes Vietnam',
      description:
        '<p>Giấy phép Báo điện tử số 422/GP-BTTTT do Bộ Thông tin &amp; Truyền thông cấp ngày 19/8/2016.&nbsp;</p><p>Tòa soạn: Deutsches Haus Ho Chi Minh City, Tầng 4, 33 Lê Duẩn, Quận 1, Tp. Hồ Chí Minh, Việt Nam.&nbsp;</p><p>Phone: +84 39 3965551&nbsp;</p><p>Email: xinchao@forbes.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.amazonaws.com/dev/news_brand/thumbs/30_1663902526122_44e44b67_25.png',
      created_at: '23/9/2022 03:08:46',
      updated_at: '11/10/2022 12:46:45',
      organization: 2,
      source_types: ['1', '2'],
    },
    {
      id: 70,
      name: 'Báo Văn nghệ Online',
      description:
        '<p>Giấy phép hoạt động báo điện tử số 207/GP-BTTTT - Bộ TTTT cấp ngày 26/04/2016 - Hội nhà văn Việt Nam&nbsp;</p><p>Tòa soạn: 17 - Trần Quốc Toản - Hoàn Kiếm - Hà Nội&nbsp;</p><p>Email: baovannghe.com.vn@gmail.com&nbsp;</p><p>Phone: (04) 62702633</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/jSCXi4kdtQVanNghe.png',
      created_at: '24/9/2022 08:47:27',
      updated_at: '14/2/2023 08:43:46',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 71,
      name: 'Báo Đại đoàn kết',
      description:
        '<p>Giấy phép hoạt động báo điện tử: Số 246/GP-BTTTT của Bộ Thông tin và Truyền thông - Cơ quan Trung ương của mặt trận Tổ quốc Việt Nam&nbsp;</p><p>Tòa soạn: 66 Bà Triệu - Hà Nội&nbsp;</p><p>Phone: (024) 38228303&nbsp;</p><p>Fax: (024) 38228547</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/cxJmkajbi1DaiDoanKet.png',
      created_at: '24/9/2022 08:49:45',
      updated_at: '14/2/2023 08:43:31',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 72,
      name: 'Tạp chí điện tử Thế giới Di sản',
      description:
        '<p>Giấy phép số: 70/GP-BTTTT ngày 05/02/2016 của Bộ Thông tin và Truyền thông - Hội Di sản văn hóa Việt Nam&nbsp;</p><p>Toà soạn: 19 Ngọc Hà, Ba Đình, Hà Nội&nbsp;</p><p>Phone: 04 37346406 / 04 37343592&nbsp;</p><p>Fax : 04 37343590&nbsp;</p><p>Email: thegioidisan@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/nYjY_41JIgTheGioiDiSan.png',
      created_at: '24/9/2022 08:53:08',
      updated_at: '14/2/2023 08:43:20',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 73,
      name: 'Tạp chí điện tử Người đưa tin',
      description:
        '<p>Giấy phép số 80/GP-BTTTT của Bộ TT&amp;TT cấp ngày 27/2/2020 - Cơ quan chủ quản: Hội Luật gia Việt Nam&nbsp;</p><p>Tòa soạn: Tầng 4, Tòa tháp Ngôi Sao - Star Tower, đường Dương Đình Nghệ - Phường Yên Hòa - Quận Cầu Giấy - Hà Nội&nbsp;</p><p>Phone:0903 405 146&nbsp;</p><p>Email: toasoan@nguoiduatin.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/p4fomEHjq4NguoiDuaTin.png',
      created_at: '24/9/2022 08:54:50',
      updated_at: '14/2/2023 08:42:52',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 74,
      name: 'Báo Một thế giới',
      description:
        '<p>Giấy phép số 77/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 26 tháng 2 năm 2020 - Cơ quan chủ quản: Hội Thông tin Khoa học và Công nghệ Việt Nam.&nbsp;</p><p>Tòa soạn Hà Nội: Nhà 22 Ngõ 249A Thụy Khuê, quận Tây Hồ, thành phố Hà Nội&nbsp;</p><p>Phone: 024.62945752.&nbsp;</p><p>TPHCM: 345/134 Trần Hưng Đạo, phường Cầu Kho, Quận 1&nbsp;</p><p>Phone: 028.38389241&nbsp;</p><p>Email: toasoan@1thegioi.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/B_iQDGQYKkMotTheGioi.png',
      created_at: '24/9/2022 08:59:43',
      updated_at: '14/2/2023 08:42:40',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 75,
      name: 'Báo Chất lượng & Cuộc sống',
      description:
        '<p>Giấy phép hoạt động báo chí in và điện tử Chất lượng và cuộc sống số: 70/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 26/02/2020 - Cơ quan ngôn luận của Hội KH và KT về TC và CL Việt Nam&nbsp;</p><p>Tòa soạn: 214/22 Tôn Thất Tùng - Phường Khương Thượng- Quận Đống Đa- TP Hà Nội.&nbsp;</p><p>Điện thoại: 024.35747649 - 024.3.5747650&nbsp;</p><p>Thư điện tử: chatluongvacuocsong@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/4DQ5y8BOFoChatLuong%26CuocSong.png',
      created_at: '24/9/2022 09:17:14',
      updated_at: '14/2/2023 08:42:20',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 76,
      name: 'Báo điện tử Công luận',
      description:
        '<p>Giấy phép hoạt động báo điện tử số 550/GP-BTTTT, ngày 06/11/2017 - CƠ QUAN NGÔN LUẬN CỦA HỘI NHÀ BÁO VIỆT NAM&nbsp;</p><p>Tòa soạn: Tòa nhà Hội Nhà báo Việt Nam - Lô E2, đường Dương Đình Nghệ, phường Yên Hòa, quận Cầu Giấy, Hà Nội&nbsp;</p><p>CQĐD phía Nam: 226/23 Lê Văn Sỹ, phường 1, quận Tân Bình, TP.HCM.&nbsp;</p><p>Phone: 090.1500.729</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/9vVKUC9yVwCongLuan.png',
      created_at: '24/9/2022 09:19:18',
      updated_at: '14/2/2023 08:42:05',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 77,
      name: 'Thế giới số',
      description:
        '<p>Giấy phép số 311/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 6/8/2013 - Cơ quan chủ quản: HỘI TIN HỌC VIỆT NAM&nbsp;</p><p>Trụ sở toà soạn: Nhà 24B/8, Ngõ 379 Đội Cấn, Quận Ba Đình, Hà Nội.&nbsp;</p><p>Văn phòng đại diện: Số 7 Nguyễn Thị Minh Khai, P.Bến Nghé, Q.1, TP.HCM&nbsp;</p><p>Hotline: 0971 438 141&nbsp;</p><p>Email: toasoan@tgs.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/9yIaJJXGwrTheGioiSo.png',
      created_at: '24/9/2022 09:21:31',
      updated_at: '14/2/2023 08:41:53',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 78,
      name: 'Báo điện tử Đảng Cộng sản Việt Nam',
      description:
        '<p>Giấy phép số: 373/GP-BTTTT của Bộ Thông tin và Truyền thông - CƠ QUAN CHỦ QUẢN: BAN TUYÊN GIÁO TRUNG ƯƠNG&nbsp;</p><p>Toà soạn: 381 Đội Cấn, Ba Đình, Hà Nội&nbsp;</p><p>Phone: 08 048161 / 08 048162&nbsp;</p><p>Fax: 08 044175&nbsp;</p><p>Email: toasoan@dangcongsan.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/ge5YImBymLDangCongSanVietNam.png',
      created_at: '24/9/2022 09:23:10',
      updated_at: '14/2/2023 08:41:34',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 79,
      name: 'Báo Dân Việt',
      description:
        '<p>Giấy phép số 115/GP-BTTTT cấp ngày 01/3/2022 - Báo điện tử của Trung ương Hội Nông dân Việt Nam Trụ sở: 13 Đường Thụy Khuê, Quận Tây Hồ, Hà Nội&nbsp;</p><p>Tòa soạn và trị sự: Lô E2, Dương Đình Nghệ, Quận Cầu Giấy, Hà Nội&nbsp;</p><p>Phone: (84-24) 38472263&nbsp;</p><p>Email: toasoan@danviet.vn&nbsp;</p><p>Hotline: 0857.835.666</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/y3F_Xm_b8xDanViet.png',
      created_at: '24/9/2022 09:25:05',
      updated_at: '14/2/2023 08:41:21',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 8,
      name: 'Nhịp Cầu Đầu Tư',
      description:
        '<p>TẠP CHÍ NHỊP CẦU ĐẦU TƯ - HỘI LIÊN LẠC VỚI NGƯỜI VIỆT NAM Ở NƯỚC NGOÀI Giấy phép trang thông tin điện tử tổng hợp số 109/GP-TTĐT&nbsp;</p><p>Tòa soạn: Phòng 8, Ngõ số 8, Tăng Bạt Hổ, Phường Phạm Đình Hổ, Quận Hai Bà Trưng, Hà Nội</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/h9_1VcENbcNhipCauDauTu.png',
      created_at: '23/9/2022 03:12:27',
      updated_at: '14/2/2023 09:15:55',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 80,
      name: 'Diễn đàn Doanh nghiệp',
      description:
        '<p>Giấy phép số: 58/GP-BTTTT ngày 18/02/2020 - Cơ quan của Phòng Thương mại và Công nghiệp Việt Nam&nbsp;</p><p>Tòa nhà VCCI, Số 9, Đào Duy Anh, Đống Đa, Hà Nội&nbsp;</p><p>Phone: (024) 3.5771239&nbsp;</p><p>Email:<strong> </strong>toasoan@dddn.com.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/QHdlwztbuVDienDanDoanhNghiep.png',
      created_at: '24/9/2022 09:27:17',
      updated_at: '14/2/2023 08:41:11',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 81,
      name: 'Tạp chí Điện tử',
      description:
        '<p>Giấy phép hoạt động báo chí số: 324/GP - BTTTT cấp ngày 15/06/2016 Giấy phép số: 134/GP-TTĐT do Cục PT,TH và TTĐT cấp ngày 26/07/2019&nbsp;</p><p>Phone: 024 8587 7779&nbsp;</p><p>Hotline: 0936 559 955&nbsp;</p><p>Email: tapchi@dientucuocsong.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/-ljJQp9hVADienTuNgayNay.png',
      created_at: '24/9/2022 09:29:04',
      updated_at: '14/2/2023 08:40:59',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 82,
      name: 'Báo Điện tử tiêu dùng',
      description:
        '<p>Giấy phép hoạt động báo chí số: 324/GP - BTTTT cấp ngày 15/06/2016 - Cơ quan ngôn luận của Hội Vô tuyến - Điện tử Việt Nam&nbsp;</p><p>Trụ sở: Số 57, Vũ Thạnh, Đống Đa, Hà Nội VP Hà Nội: Tầng 4 số 41 Vũ Thạnh, Đống Đa, Hà Nội&nbsp;</p><p>VP Hồ Chí Minh: Số 11/11 Nguyễn Văn Mại, phường 4, Quận Tân Bình, Tp. Hồ Chí Minh</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/gU2KrCd4jLDienTuTieuDung.png',
      created_at: '24/9/2022 09:31:25',
      updated_at: '14/2/2023 08:40:49',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 83,
      name: 'Tạp chí Doanh nghiệp hội nhập',
      description:
        '<p>Giấy phép hoạt động báo chí số 452/GP-BTTTT do Bộ Thông tin và Truyền thông cấp năm 2020 - Trung ương hiệp hội Doanh nghiệp vừa và nhỏ Việt Nam&nbsp;</p><p>Tòa soạn: Phòng 1102, tầng 11, nhà D, Khách sạn Thể thao Hacinco, phường Nhân Chính, quận Thanh Xuân, Hà Nội&nbsp;</p><p>Hotline: 0962 975 475; 0975 486 080&nbsp;</p><p>Email: doanhnghiephoinhap.banbientap@gmail.com.</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/GbhdCwOb7QDoanhNghiepHoiNhap.png',
      created_at: '24/9/2022 09:33:52',
      updated_at: '14/2/2023 08:40:35',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 84,
      name: 'Tạp chí Doanh nghiệp và Tiếp thị',
      description:
        '<p>Giấy phép hoạt động báo chí số 72/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 26/02/2020 - Cơ quan chủ quản: Trung ương Hội Marketing Việt Nam&nbsp;</p><p>Tòa soạn: Tầng 6 - Tòa nhà MB số 144 phố Đội Cấn, Ba Đình, Hà Nội&nbsp;</p><p>Tel: 024. 6682.5543&nbsp;</p><p>Hotline: 0968.491.036&nbsp;</p><p>Email: info@doanhnghieptiepthi.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/YbfgTZOWMsDoanhNghiep%26TiepThi.png',
      created_at: '24/9/2022 09:35:13',
      updated_at: '14/2/2023 08:40:23',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 85,
      name: 'Tạp chí Doanh nghiệp Việt Nam',
      description:
        '<p>Giấy phép hoạt động báo chí số 512/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 11/11/2020 - CƠ QUAN NGÔN LUẬN CỦA HIỆP HỘI DOANH NGHIỆP KHOA HỌC VÀ CÔNG NGHỆ VIỆT NAM&nbsp;</p><p>Tòa soạn: A125, 37 Hùng Vương, P. Điện Biên, Q. Ba Đình, TP. Hà Nội.&nbsp;</p><p>Hotline tòa soạn: 0983. 348678 - 024.22169595&nbsp;</p><p>Email: banbientap@doanhnghiepvn.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/8bFiqY2H1lDoanhNghiepVietNam.png',
      created_at: '24/9/2022 09:37:43',
      updated_at: '14/2/2023 08:40:06',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 86,
      name: 'Báo Giáo dục Việt Nam',
      description:
        '<p>Giấy phép số: 74/GP-BTTTT ngày 26/02/2020 - Cơ quan chủ quản: Hiệp hội các Trường đại học, cao đẳng Việt Nam.&nbsp;</p><p>Tòa soạn: Tầng 6B, tòa nhà số 14-16 phố Hàm Long, phường Phan Chu Trinh, quận Hoàn Kiếm, Hà Nội.&nbsp;</p><p>Phone: 0938.766.888 - 0243.5569666&nbsp;</p><p>Email: toasoan@giaoduc.net.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/ZeMqzPDl9nGiaoDucVietNam.png',
      created_at: '24/9/2022 09:40:27',
      updated_at: '14/2/2023 08:39:50',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 87,
      name: 'Báo Tri thức và Cuộc sống',
      description:
        '<p>Giấy phép: số 536/GP-BTTTT, cấp ngày 19/11/2020 - CƠ QUAN CHỦ QUẢN: LIÊN HIỆP CÁC HỘI KHOA HỌC VÀ KỸ THUẬT VIỆT NAM&nbsp;</p><p>Tòa soạn: 53 Nguyễn Du, quận Hai Bà Trưng, Hà Nội&nbsp;</p><p>VPGD: 70 Trần Hưng Đạo, phường Trần Hưng Đạo, quận Hoàn Kiếm, Hà Nội.&nbsp;</p><p>VPĐD tại TP.HCM: Tầng 5, 224 Điện Biên Phủ, phường Võ Thị Sáu, quận 3, Thành phố Hồ Chí Minh&nbsp;</p><p>Phone: 024 6 254 3519&nbsp;</p><p>Hotline: 096 523 77 56&nbsp;</p><p>Email: baotrithuccuocsong@gmail.com - tkts@kienthuc.net.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/4TEtjYD7xoTriThuc%26CuocSong.png',
      created_at: '24/9/2022 09:42:49',
      updated_at: '14/2/2023 08:39:35',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 88,
      name: 'Tạp chí Kinh tế Chứng khoán Việt Nam',
      description:
        '<p>Giấy phép hoạt động báo điện tử số: 62/GP-BTTTT do Bộ Thông tin &amp; Truyền thông cấp ngày 21/02/2020 - Cơ quan chủ quản: Hiệp hội Kinh doanh Chứng khoán Việt Nam&nbsp;</p><p>Tòa soạn: P503 Tòa Nhà 17T6, Hoàng Đạo Thúy, Phường Nhân Chính, Quận Thanh Xuân, Hà Nội&nbsp;</p><p>Tel: (024) 66666282&nbsp;</p><p>Fax: (024) 66666282&nbsp;</p><p>Email: kinhtechungkhoanvn@gmail.com&nbsp;</p><p>Hotline: 0967106618</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/4m0RL-v1zqKinhTeChungKhoan.png',
      created_at: '24/9/2022 09:45:18',
      updated_at: '14/2/2023 08:39:23',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 89,
      name: 'Tạp chí điện tử Kinh tế và Đồ uống',
      description:
        '<p>Giấy phép xuất bản số 71/GP-BTTTT ngày 26/02/2020 của Bộ Thông tin và Truyền thông - Cơ quan của Hiệp hội Chè Việt Nam&nbsp;</p><p>Tòa soạn: 46 Tăng Bạt Hổ - Hai Bà Trưng - Hà Nội&nbsp;</p><p>Phone: 0911.563.663 / (024) 39.729.471&nbsp;</p><p>Email: toasoan@kinhtedouong.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/-IcShoB-rRKinhTe%26DoUong.png',
      created_at: '24/9/2022 09:46:48',
      updated_at: '14/2/2023 08:39:10',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 9,
      name: 'Tinh Tế',
      description:
        '<p>Giấy phép thiết lập MXH số 11/GP-BTTTT, Ký ngày: 08/01/2019.&nbsp;</p><p>Tòa soạn: Số 70 Bà Huyện Thanh Quan, P. Võ Thị Sáu, Quận 3, TPHCM&nbsp;</p><p>Phone: 02862713156&nbsp;</p><p>MST: 0313255119</p>',
      thumb:
        'https://cinvest-dev-1.s3.amazonaws.com/dev/news_brand/thumbs/30_1663902876496_7d204e0e_25.png',
      created_at: '23/9/2022 03:14:36',
      updated_at: '6/10/2022 08:55:10',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 90,
      name: 'Báo Lao động',
      description:
        '<p>Giấy phép số 346/GP-BTTTT do Bộ TTTT cấp ngày 08.07.2022 - Cơ quan của Tổng Liên đoàn Lao động Việt Nam.&nbsp;</p><p>Tòa soạn: Số 06, Phạm Văn Bạch, phường Yên Hoà, quận Cầu Giấy, TP.Hà Nội&nbsp;</p><p>Phone: (+84 24) 38252441 - 35330305&nbsp;</p><p>Báo điện tử: Phone: (+84 24) 38303032 - 38303034&nbsp;</p><p>Email: toasoan@laodong.com.vn&nbsp;</p><p>Hotline: 096 8383388</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/nZ0ZYbD_YXLaoDong.png',
      created_at: '24/9/2022 09:49:36',
      updated_at: '14/2/2023 08:38:55',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 91,
      name: 'Tạp chí điện tử Lao động và Công đoàn',
      description:
        '<p>Giấy phép xuất bản số 182/GP-BTTTT cấp ngày 13/5/2019 - Cơ quan ngôn luận của Tổng Liên đoàn Lao động Việt Nam&nbsp;</p><p>Tòa soạn: 175 Giảng Võ, Đống Đa, Hà Nội&nbsp;</p><p>Hotline: 0866 686 115&nbsp;</p><p>Điện thoại: 0243 734 9833&nbsp;</p><p>Email: tapchidientu.laodongcongdoan@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/xwrrimmofOLaoDong%26CongDoan.png',
      created_at: '24/9/2022 09:51:19',
      updated_at: '14/2/2023 08:38:43',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 92,
      name: 'Markettimes - Tạp chí Nhịp sống thị trường',
      description:
        '<p>Giấy phép hoạt động Tạp chí điện tử số 535/GP-BTTTT ngày 21/08/2021 của Bộ Thông tin &amp; Truyền thông - Cơ quan của Hội Thẩm định giá Việt Nam&nbsp;</p><p>Tòa soạn: Số 4, Ngõ Hàng Chuối 1, Hàng Chuối, Hai Bà Trưng, Hà Nội.&nbsp;</p><p>Email: toasoan@markettimes.vn Văn phòng&nbsp;</p><p>Tòa soạn: Tầng 2, Tòa nhà Kim Ánh, Số 1, Ngõ 78, Duy Tân, Cầu Giấy, Hà Nội&nbsp;</p><p>Hotline: 035.289.5335</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/NwvgdXCXobMarketTimes.png',
      created_at: '24/9/2022 09:53:06',
      updated_at: '14/2/2023 08:38:31',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 93,
      name: 'Tạp chí điện tử Mekong ASEAN',
      description:
        '<p>Giấy phép số: 49/GP-BTTTT - do Bộ TT&amp;TT cấp ngày 07/02/2020 - Cơ quan chủ quản: Hội Phát triển hợp tác kinh tế Việt Nam - ASEAN&nbsp;</p><p>Tòa soạn: Tầng 4, HH3, Sudico, Mỹ Đình, Quận Nam Từ Liêm, Hà Nội&nbsp;</p><p>Email: banbientap@mekongasean.vn&nbsp;</p><p>Phone: 0835959999</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/LjH0-PXE9Amekong-logo_ver2.png',
      created_at: '24/9/2022 09:55:45',
      updated_at: '14/2/2023 08:38:21',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 94,
      name: 'Tạp chí Ngày mới Online',
      description:
        '<p>Giấy phép hoạt động báo chí số 47/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 5/2/2020 - Cơ quan chủ quản: Hội Người cao tuổi Việt Nam&nbsp;</p><p>Tòa soạn: 12 Lê Hồng Phong, Ba Đình, Hà Nội&nbsp;</p><p>Phone: (024) 37334432 - (024) 37334423&nbsp;</p><p>Email: Tạp chí điện tử: tapchingaymoionline@gmail.com / Tạp chí in: nguoicaotuoitapchi@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/4EhskDRrW0NgayMoi.png',
      created_at: '24/9/2022 09:57:54',
      updated_at: '14/2/2023 08:38:02',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 95,
      name: 'Tạp chí điện tử Nhà đầu tư',
      description:
        '<p>Giấy phép hoạt động tạp chí in và tạp chí điện tử số 494/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 03/8/2021 - Cơ quan chủ quản: Hiệp hội Doanh nghiệp đầu tư nước ngoài (VAFIE)&nbsp;</p><p>Trụ sở Tòa soạn: Tầng 7, số 65 Văn Miếu, Q.Đống Đa, TP. Hà Nội&nbsp;</p><p>Email: toasoan@nhadautu.vn</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/jtEMRSJlhaNhaDauTu.png',
      created_at: '24/9/2022 10:00:49',
      updated_at: '14/2/2023 08:36:38',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 96,
      name: 'Báo Nhân Dân',
      description:
        '<p>Cơ quan trung ương của Đảng Cộng Sản Việt Nam - Tiếng nói của Đảng, Nhà Nước và Nhân Dân Việt Nam&nbsp;</p><p>Trụ sở chính: 71 Hàng Trống - Hà Nội.&nbsp;</p><p>Tel: (84) 24 382 54231/382 54232&nbsp;</p><p>Fax: (84) 24 382 55593.&nbsp;</p><p>Email: nhandandientu@nhandan.vn - nhandandientutiengviet@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/74Eg5ZloGKNhanDan.png',
      created_at: '24/9/2022 10:03:26',
      updated_at: '14/2/2023 08:36:25',
      organization: 1,
      source_types: ['1', '2'],
    },
    {
      id: 97,
      name: 'Tạp chí Nhân đạo',
      description:
        '<p>TẠP CHÍ NHÂN ĐẠO - CƠ QUAN NGÔN LUẬN CỦA HỘI CHỮ THẬP ĐỎ VIỆT NAM ISSN 2734 - 9004 Giấy phép số: 476/GP-BTTTT cấp ngày 23/7/2021 của Bộ Thông tin và Truyền thông&nbsp;</p><p>Tòa soạn: 68 Bà Triệu, Quận Hoàn Kiếm, Hà Nội&nbsp;</p><p>Phone: (024) 3.8225280&nbsp;</p><p>Email: tapchinhandao@gmail.com</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/cnZjaQ-k8MNhanDao.png',
      created_at: '24/9/2022 10:05:04',
      updated_at: '14/2/2023 08:36:12',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 98,
      name: 'PetroTimes',
      description:
        '<p>Giấy phép hoạt động số: 50/GP-BTTT ngày 10/2/2020 - Cơ quan chủ quản: HỘI DẦU KHÍ VIỆT NAM&nbsp;</p><p>Tòa soạn: Tầng 4, toà nhà Viện Dầu khí Việt Nam 167 Trung Kính, Q.Cầu Giấy, Hà Nội</p><p>Email: toasoan@petrotimes.vn / nangluongmoi@petrotimes.vn&nbsp;</p><p>Hotline: 0942.66.46.46</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/qi24eNLf4qPetroTimes.png',
      created_at: '24/9/2022 10:07:01',
      updated_at: '14/2/2023 08:33:56',
      organization: 5,
      source_types: ['1', '2'],
    },
    {
      id: 99,
      name: 'Tạp chí điện tử Phụ nữ mới',
      description:
        '<p>Giấy phép hoạt động báo điện tử số 354/GP-BTTTT ngày 26/8/2019 - Cơ quan chủ quản: Hội Nữ trí thức Việt Nam&nbsp;</p><p>Tòa soạn: VP Hà Nội: 93 ngõ 88 Võ Thị Sáu, Phường Thanh Nhàn, Quận Hai Bà Trưng, Hà Nội.&nbsp;</p><p>Hotline: 0969 90 84 89&nbsp;</p><p>Email: toasoan.tapchiphunumoi@gmail.com&nbsp;</p><p>VP TP.HCM: Lô 3.05, Trung tâm thương mại Viva Mall Số 1472 Võ Văn Kiệt, Phường 3, Quận 6, TP.HCM.&nbsp;</p><p>Phone: 0886 678 464&nbsp;</p><p>Hotline: 0917 267 237</p><p>Email: phunumoi.vphcm@gmail.com.</p>',
      thumb:
        'https://cinvest-dev-1.s3.ap-southeast-1.amazonaws.com/dev/news_brand/thumbs/DH8f7zgqRjPhuNuMoi.png',
      created_at: '24/9/2022 13:23:57',
      updated_at: '14/2/2023 08:33:42',
      organization: 5,
      source_types: ['1', '2'],
    },
  ];

  async seed() {
    Logger.debug('PublisherSeedService');
    return Promise.all(
      this.dataPublishers
        .map((publisher) => {
          return {
            name: publisher.name,
            description: publisher.description,
            thumbnail: publisher.thumb,
          };
        })
        .map(async (publisher) => {
          const detail = await this.publisherRepo.findOne({
            where: {
              name: publisher.name,
            },
          });
          if (detail) return;
          return this.publisherRepo.save(publisher);
        }),
    );
  }
}
