package com.beom.diary.diary_back.Service;

import com.beom.diary.diary_back.dto.DiaryDto;
import com.beom.diary.diary_back.entity.Diary;
import com.beom.diary.diary_back.repository.DiaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class DiaryService {


    @Autowired
    DiaryRepository diaryRepository;


    public List<Diary> getAll()
    {
        return (List<Diary>) diaryRepository.findAll();
    }

    public Optional<Diary> getId(Long id)
    {
        return diaryRepository.findById(id);
    }

    public Diary add(DiaryDto diaryDto)
    {
        Diary addtarget = diaryDto.toEntity();
        diaryRepository.save(addtarget);
        return addtarget;
    }

    public Diary update(Long id, DiaryDto diaryDto)
    {
        Diary diary = diaryDto.toEntity();
        Diary target = diaryRepository.findById(id).orElse(null);
        target.update(diary);
        Diary updateDiary = diaryRepository.save(target);
        return updateDiary;
    }

    public Diary updateCommit(Long id)
    {

        Diary updateCommitDiary = diaryRepository.findById(id).orElse(null);
        if (updateCommitDiary.isCommit()==true)
        {
            updateCommitDiary.setCommit(false);
        }
        else
        {
            updateCommitDiary.setCommit(true);
        }
        diaryRepository.save(updateCommitDiary);
        return updateCommitDiary;
    }




}
