package com.beom.diary.diary_back.repository;

import com.beom.diary.diary_back.entity.Diary;
import org.springframework.data.repository.CrudRepository;

public interface DiaryRepository extends CrudRepository<Diary,Long> {


}
