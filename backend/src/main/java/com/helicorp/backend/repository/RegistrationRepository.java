package com.helicorp.backend.repository;

import com.helicorp.backend.entity.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Long> {
    Optional<Registration> findByEmail(String email);
    boolean existsByEmail(String email);
}
