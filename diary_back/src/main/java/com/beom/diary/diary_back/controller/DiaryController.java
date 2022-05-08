package com.beom.diary.diary_back.controller;


import com.beom.diary.diary_back.Service.DiaryService;
import com.beom.diary.diary_back.dto.DiaryDto;
import com.beom.diary.diary_back.entity.Diary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
public class DiaryController {

    @Autowired
    DiaryService diaryService;


    @GetMapping("/getall")
    public List<Diary> getAll()
    {
        return diaryService.getAll();
    }

    @GetMapping("/getid/{id}")
    public Optional<Diary> getid(@PathVariable Long id)
    {
        return diaryService.getId(id);
    }


    @PostMapping("/add")
    public Diary add(@RequestBody  DiaryDto diaryDto)
    {
       Diary addDiary = diaryService.add(diaryDto);
       return addDiary;
    }

    @PostMapping("/add/img")
    public Diary addImg(@RequestBody DiaryDto diaryDto, MultipartFile file) throws Exception
    {
        Diary addDiary = diaryService.addImg(diaryDto,file);
        return addDiary;
    }


    @PutMapping("/update/{id}")
    public Diary update(@PathVariable Long id, @RequestBody DiaryDto diaryDto)
    {
        Diary updateDiary = diaryService.update(id,diaryDto);
        return updateDiary;
    }

    @PutMapping("/update/commit/{id}")
    public Diary updateCommit(@PathVariable Long id)
    {
        Diary updateDiary = diaryService.updateCommit(id);
        return updateDiary;
    }

    @DeleteMapping("/delete/{id}")
    public String deleteDiary(@PathVariable Long id)
    {
        diaryService.deleteDiary(id);
        return id+"번 글이 삭제되었습니다.";
    }



}
