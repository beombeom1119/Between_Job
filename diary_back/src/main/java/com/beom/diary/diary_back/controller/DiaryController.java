package com.beom.diary.diary_back.controller;


import com.beom.diary.diary_back.Service.DiaryService;
import com.beom.diary.diary_back.dto.DiaryDto;
import com.beom.diary.diary_back.entity.Diary;
import com.beom.diary.diary_back.entity.Image;
import com.beom.diary.diary_back.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
public class DiaryController {

    @Autowired
    DiaryService diaryService;      ///Autowired

    @Autowired
    ImageRepository imageRepository; //Image


    //모든 글 찾기
    @GetMapping("/getall")
    public List<Diary> getAll()
    {
        return diaryService.getAll();
    }

    //ID로 글 찾기
    @GetMapping("/getid/{id}")
    public Optional<Diary> getid(@PathVariable Long id)
    {
        return diaryService.getId(id);
    }

    //글 추가
    @PostMapping("/add")
    public Diary add(@RequestBody  DiaryDto diaryDto)
    {
       Diary addDiary = diaryService.add(diaryDto);
       return addDiary;
    }

    //글 수정
    @PutMapping("/update/{id}")
    public Diary update(@PathVariable Long id, @RequestBody DiaryDto diaryDto)
    {
        Diary updateDiary = diaryService.update(id,diaryDto);
        return updateDiary;
    }

    //커밋 수정
    @PutMapping("/update/commit/{id}")
    public Diary updateCommit(@PathVariable Long id)
    {
        Diary updateDiary = diaryService.updateCommit(id);
        return updateDiary;
    }

    //글 삭제
    @DeleteMapping("/delete/{id}")
    public String deleteDiary(@PathVariable Long id)
    {
        diaryService.deleteDiary(id);
        return id+"번 글이 삭제되었습니다.";
    }



    @GetMapping("/image/getall")
    public List<Image> getallImage()
    {
        return (List<Image>) imageRepository.findAll();
    }


}
