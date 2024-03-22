SET SQL_SAFE_UPDATES = 0;

UPDATE posts SET category_code='1' WHERE category_slug='startup';
UPDATE posts SET category_code='2' WHERE category_slug='investment';
UPDATE posts SET category_code='3' WHERE category_slug='enterprise';
UPDATE posts SET category_code='4' WHERE category_slug='stock';
UPDATE posts SET category_code='5' WHERE category_slug='law';

UPDATE posts SET subject_code='1' WHERE subject_slug='projects';
UPDATE posts SET subject_code='2' WHERE subject_slug='tendency';
UPDATE posts SET subject_code='3' WHERE subject_slug='competition';
UPDATE posts SET subject_code='4' WHERE subject_slug='seminar';
UPDATE posts SET subject_code='5' WHERE subject_slug='expert-corner';
UPDATE posts SET subject_code='6' WHERE subject_slug='mentor';
UPDATE posts SET subject_code='7' WHERE subject_slug='equily';
UPDATE posts SET subject_code='8' WHERE subject_slug='donation';
UPDATE posts SET subject_code='9' WHERE subject_slug='shark-tank';
UPDATE posts SET subject_code='10' WHERE subject_slug='venture-capital';
UPDATE posts SET subject_code='11' WHERE subject_slug='m-and-a';
UPDATE posts SET subject_code='12' WHERE subject_slug='information';
UPDATE posts SET subject_code='13' WHERE subject_slug='businessmen';
UPDATE posts SET subject_code='14' WHERE subject_slug='administration';
UPDATE posts SET subject_code='15' WHERE subject_slug='enterprises-write';
UPDATE posts SET subject_code='16' WHERE subject_slug='logistic';
UPDATE posts SET subject_code='17' WHERE subject_slug='stock';
UPDATE posts SET subject_code='18' WHERE subject_slug='forex';
UPDATE posts SET subject_code='19' WHERE subject_slug='crypto';
UPDATE posts SET subject_code='20' WHERE subject_slug='fund-certificates';
UPDATE posts SET subject_code='21' WHERE subject_slug='commodity-derivative';
UPDATE posts SET subject_code='22' WHERE subject_slug='politics-and-policy';
UPDATE posts SET subject_code='23' WHERE subject_slug='advisory';

UPDATE banners SET post_category_code='1' WHERE post_category_slug='startup';
UPDATE banners SET post_category_code='2' WHERE post_category_slug='investment';
UPDATE banners SET post_category_code='3' WHERE post_category_slug='enterprise';
UPDATE banners SET post_category_code='4' WHERE post_category_slug='stock';
UPDATE banners SET post_category_code='5' WHERE post_category_slug='law';

UPDATE banners SET post_subject_code='1' WHERE post_subject_slug='projects';
UPDATE banners SET post_subject_code='2' WHERE post_subject_slug='tendency';
UPDATE banners SET post_subject_code='3' WHERE post_subject_slug='competition';
UPDATE banners SET post_subject_code='4' WHERE post_subject_slug='seminar';
UPDATE banners SET post_subject_code='5' WHERE post_subject_slug='expert-corner';
UPDATE banners SET post_subject_code='6' WHERE post_subject_slug='mentor';
UPDATE banners SET post_subject_code='7' WHERE post_subject_slug='equily';
UPDATE banners SET post_subject_code='8' WHERE post_subject_slug='donation';
UPDATE banners SET post_subject_code='9' WHERE post_subject_slug='shark-tank';
UPDATE banners SET post_subject_code='10' WHERE post_subject_slug='venture-capital';
UPDATE banners SET post_subject_code='11' WHERE post_subject_slug='m-and-a';
UPDATE banners SET post_subject_code='12' WHERE post_subject_slug='information';
UPDATE banners SET post_subject_code='13' WHERE post_subject_slug='businessmen';
UPDATE banners SET post_subject_code='14' WHERE post_subject_slug='administration';
UPDATE banners SET post_subject_code='15' WHERE post_subject_slug='enterprises-write';
UPDATE banners SET post_subject_code='16' WHERE post_subject_slug='logistic';
UPDATE banners SET post_subject_code='17' WHERE post_subject_slug='stock';
UPDATE banners SET post_subject_code='18' WHERE post_subject_slug='forex';
UPDATE banners SET post_subject_code='19' WHERE post_subject_slug='crypto';
UPDATE banners SET post_subject_code='20' WHERE post_subject_slug='fund-certificates';
UPDATE banners SET post_subject_code='21' WHERE post_subject_slug='commodity-derivative';
UPDATE banners SET post_subject_code='22' WHERE post_subject_slug='politics-and-policy';
UPDATE banners SET post_subject_code='23' WHERE post_subject_slug='advisory';

SET SQL_SAFE_UPDATES = 1;