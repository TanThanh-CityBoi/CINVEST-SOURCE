-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS demo (
  id INT NOT NULL AUTO_INCREMENT,
  temp VARCHAR(191) NOT NULL,
  PRIMARY KEY (id))
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
ENGINE = InnoDB;
