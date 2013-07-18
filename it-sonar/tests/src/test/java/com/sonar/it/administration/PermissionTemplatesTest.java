/*
 * Copyright (C) 2009-2012 SonarSource SA
 * All rights reserved
 * mailto:contact AT sonarsource DOT com
 */

package com.sonar.it.administration;

import com.sonar.orchestrator.Orchestrator;
import com.sonar.orchestrator.selenium.Selenese;
import org.junit.ClassRule;
import org.junit.Test;

/**
 * Note: those tests should be integrated in the Administration test suite when the permission data integrity can be guaranteed
 * (i.e. with the use of a WS client to restore the default permissions)
 */
public class PermissionTemplatesTest {

  @ClassRule
  public static final Orchestrator ORCHESTRATOR = Orchestrator.builderEnv().build();

  /**
   * SONAR-4466
   * SONAR-4464
   */
  @Test
  public void should_manage_permission_templates() throws Exception {

    Selenese selenese = Selenese.builder().setHtmlTestsInClasspath("manage-permission-templates",
      "/selenium/administration/permission-templates/display-default-template.html",
      "/selenium/administration/permission-templates/create-template.html",
      "/selenium/administration/permission-templates/create-template-duplicate-name.html",
      "/selenium/administration/permission-templates/create-template-empty-name.html",
      "/selenium/administration/permission-templates/edit-template.html",
      "/selenium/administration/permission-templates/delete-template.html"
      )
      .build();
    ORCHESTRATOR.executeSelenese(selenese);
  }

  /**
   * SONAR-4467
   */
  @Test
  public void should_define_default_templates() throws Exception {

    Selenese selenese = Selenese.builder().setHtmlTestsInClasspath("manage-define-default-templates",
      "/selenium/administration/permission-templates/set-default-projects-template.html"
    )
      .build();
    ORCHESTRATOR.executeSelenese(selenese);
  }
}
